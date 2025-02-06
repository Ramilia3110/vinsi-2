import React, { useEffect, useState } from "react";
import s from "./Hero.module.scss";
import { MdOutlineTableChart, MdPercent } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiBarChartSquare, BiNetworkChart } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { TbArrowsDoubleSwNe } from "react-icons/tb";
import { IoDocumentOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Chart as ChartJs, defaults } from "chart.js/auto";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import revenueData from "../../data/revenueData.json";
import sourceData from "../../data/sourceData.json";
import { useInView } from "react-intersection-observer";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  // Intersection Observer for chart visibility
  const { ref: barRef, inView: barInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: lineRef, inView: lineInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: doughnutRef, inView: doughnutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1000, // Duration of the animation when it is triggered
      easing: "easeInOutQuad",
    },
    // hover: {
    //   onHover: function (e) {
    //     const chart = this;
    //     const activePoints = chart.getElementsAtEventForMode(e, "nearest", {
    //       intersect: true,
    //     });
    //     if (activePoints.length > 0) {
    //       // Change background color on hover
    //       const index = activePoints[0].index;
    //       chart.data.datasets[0].backgroundColor = [
    //         "#FF5733", // Highlight color on hover
    //         "#FF8C00",
    //         "#DAF7A6",
    //       ];
    //       chart.update();
    //     } else {
    //       chart.data.datasets[0].backgroundColor = [
    //         "#2c4597",
    //         "#977e2c",
    //         "#4665c9",
    //       ];
    //       chart.update();
    //     }
    //   },
    // },
  };

  return (
    <>
      <div className={s.container}>
        <div className={`${s.tablet} ${scrolled ? s.scrolled : ""}`}>
          <div className={s.panel}>
            {[
              MdOutlineTableChart,
              BiBarChartSquare,
              RxUpdate,
              AiOutlineLineChart,
              BiNetworkChart,
              TbArrowsDoubleSwNe,
              IoDocumentOutline,
              MdPercent,
              IoIosInformationCircleOutline,
            ].map((Icon, index) => (
              <span key={index}>
                <Icon />
              </span>
            ))}
          </div>
          <div className={s.screen}>
            {/* Bar Chart */}
            <div
              ref={barRef}
              className={`${s.screen1} chart ${barInView ? s.animate : ""}`}
            >
              {barInView && (
                <Bar
                  data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                      {
                        label: "Count",
                        data: sourceData.map((data) => data.value),
                        backgroundColor: ["#2c4597", "#85521d", "#4665c9"],
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </div>

            {/* Line Chart */}
            <div
              ref={lineRef}
              className={`${s.screen2} chart ${lineInView ? s.animate : ""}`}
            >
              {lineInView && (
                <Line
                  data={{
                    labels: revenueData.map((data) => data.label),
                    datasets: [
                      {
                        label: "Revenue",
                        data: revenueData.map((data) => data.revenue),
                        backgroundColor: "#27445D",
                        borderColor: "#EFE9D5",
                      },
                      {
                        label: "Cost",
                        data: revenueData.map((data) => data.cost),
                        backgroundColor: "#F4F8D3",
                        borderColor: "#F7CFD8",
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </div>
            <div className={s.screen3}></div>
            {/* Doughnut Chart */}
            <div
              ref={doughnutRef}
              className={`${s.screen4} chart ${
                doughnutInView ? s.animate : ""
              }`}
            >
              {doughnutInView && (
                <Doughnut
                  data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                      {
                        label: "Count",
                        data: sourceData.map((data) => data.value),
                        backgroundColor: [
                          "#783f04",
                          "#85521d",
                          "#936536",
                          "#a0784f",
                          "#ae8b68",
                          "#bb9f81",
                          "#c9b29a",
                          "#d6c5b3",
                          "#e4d8cc",
                        ],
                        borderColor: "transparent",
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={s.content}>
        <h1 className={s.title}>IT Solutions for your Bussiness</h1>
        <p className={s.text}>
          $1.0 billion in capital raised by some of the most prominent
          investors, Clear Street services hundreds of institutional clients and
          supports ~$60 billion in customer balances.
        </p>
      </div>
    </>
  );
}
