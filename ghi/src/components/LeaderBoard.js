import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "flowbite/dist/flowbite.min.css";
import { Table } from "flowbite-react";
import trophy from "../images/trophy.gif";
import confetti from "../images/confetti.gif";

export default function LeaderBoard() {
  //   const [scores, setScores] = useState([]);

  //   useEffect(() => {
  //     async function getData() {
  //       const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/api/scores/`;
  //       console.log(url);
  //       const response = await fetch(url);
  //       const data = await response.json();

  //       if (response.ok) {
  //         // this is to set the scores in descending order and only show the top ten scores
  //         // const sortScores = data.scores.sort((a, b) => b.score - a.score);
  //         // setScores(sortScores.slice(0, 10));
  //         setScores(data.scores);
  //       }
  //     }
  //     getData();
  //   }, []);

  const [data, setData] = useState(0);

  const leaderboardData = [
    [
      { rank: 1, name: "John", score: 100 },
      { rank: 2, name: "Jane", score: 90 },
      { rank: 3, name: "Bob", score: 80 },
      { rank: 4, name: "Mike", score: 70 },
      { rank: 5, name: "Sara", score: 60 },
      { rank: 6, name: "Tom", score: 50 },
      { rank: 7, name: "David", score: 40 },
      { rank: 8, name: "Emily", score: 30 },
      { rank: 9, name: "Peter", score: 20 },
      { rank: 10, name: "Candice", score: 10 },
    ],
  ];

  const scores = leaderboardData[data];

  return (
    <>
      <div
        className="font-[Display] p-8 bg-[#FFCFD2]"
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
        className="h-[100vh] p-8 bg-[#FFCFD2]"
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
          </Table.Head>
          <Table.Body className="divide-y">
            {scores.map((item) => (
              <Table.Row
                key={item.rank}
                className="transition-colors hover:bg-[#CFBAF0] hover:shadow-md"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  {item.rank}
                </Table.Cell>
                <Table.Cell className="text-center">{item.name}</Table.Cell>
                <Table.Cell className="text-center">{item.score}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
