import { useState, useEffect } from "react";
import "flowbite/dist/flowbite.min.css";
import { Table } from "flowbite-react";
import trophy from "../images/trophy.gif";
import confetti from "../images/confetti.gif";

export function formatTime(time) {
  time = time.slice(0, -1);

  let ms = time % 100;
  let ss = Math.floor(time / 100) % 60;
  let mm = Math.floor(time / 6000);

  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }
  if (ms < 10) {
    ms = "0" + ms;
  }

  return `${mm}:${ss}:${ms}`;
}

export default function LeaderBoard() {
  const [scores, setScores] = useState([]);
  const [games, setGames] = useState([]);
  const [chosenGame, setChosenGame] = useState(1);

  useEffect(() => {
    async function getGames() {
      const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/games`;
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();

        const gameData = data.map((game) => ({ id: game.id, name: game.name }));
        setGames(gameData);
      } catch (e) {
        console.error("Error fetching games", e);
      }
    }

    async function getScores() {
      const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/scores/${chosenGame}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch scores");
        }
        const data = await response.json();

        const dataSet = data.filter((item) => item.score !== 0).slice(0, 10);

        setScores(dataSet);
      } catch (e) {
        console.error("Error fetching scores", e);
      }
    }
    getGames();
    getScores();
  }, [chosenGame]);

  const handleGameChange = (e) => {
    setChosenGame(e.target.value);
  };

  return (
    <>
      <div>
        <div
          className=" p-8 bg-beige "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: 100, width: 100 }}
            src={trophy}
            className="mr-1 h-6 sm:h-9"
            alt="trophy"
          />
          <p
            className="text-4xl text-center font-bold borderBottom: 1px solid black tracking-wider text-[#90DBF4]"
            style={{
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            QUIZ LEADERBOARD
          </p>
          <img
            style={{ height: 100, width: 100 }}
            src={trophy}
            className="ml-1 h-6 sm:h-9"
            alt="trophy"
          />
        </div>
        <div
          className="  bg-beige"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <select onChange={handleGameChange}>
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </select>
        </div>
        <div
          className="h-[100vh] p-8 bg-beige"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center, right center",
            backgroundImage: `url(${confetti}), url(${confetti})`,
          }}
        >
          <Table
            striped={true}
            style={{
              width: "500px",
              height: "80%",
              backgroundColor: "#F1C0E8",
              borderCollapse: "separate",
              borderSpacing: "0px 8px",
              borderRadius: "20px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            }}
            className="p-8"
          >
            <Table.Head
              style={{
                backgroundColor: "#CFBAF0",
                fontFamily: "sans-serif",
                borderBottom: "2px solid #B9FBC0",
              }}
            >
              <Table.HeadCell
                className="font-bold tracking-wider text-lg text-center text-[#90DBF4]"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                Rank
              </Table.HeadCell>
              <Table.HeadCell
                className="font-bold tracking-wider text-lg text-center text-[#90DBF4]"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                Name
              </Table.HeadCell>
              <Table.HeadCell
                className="font-bold tracking-wider text-lg text-center text-[#90DBF4]"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                Score
              </Table.HeadCell>
              <Table.HeadCell
                className="font-bold tracking-wider text-lg text-center text-[#90DBF4]"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                Time Completed
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {scores.map((item, index) => (
                <Table.Row
                  key={item.id}
                  className="transition-colors hover:bg-[#CFBAF0] hover:shadow-md"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="text-center">
                    {item.player_id.username}
                  </Table.Cell>
                  <Table.Cell className="text-center">{item.score}</Table.Cell>
                  <Table.Cell className="text-center">
                    {formatTime(item.time_completed)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className=" "></div>
      </div>
    </>
  );
}
