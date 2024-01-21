'use client';
{/*
import React, {useEffect} from "react";
import _ from "lodash";

import { Responsive, WidthProvider } from "react-grid-layout";
import { Button } from "@nextui-org/react";
import { Navbar } from "../components/nav-bar.component";
import { doc } from "firebase/firestore";

export default function Home() {
  

  const ResponsiveGridLayout = WidthProvider(Responsive);

  let layout = generateLayout();



  return (
    <div>
      <Navbar />

      <Button
        className="text-sm font-normal text-default-600 bg-default-100 m-2"
        startContent="X"
        variant="flat"
        onClick={() => randomizeElements()}
      >
        Randomize
        </Button>

      <div id="DragEditor" className="bg-gray-200 m-10 overflow-auto h-[700px] border-2 border-gray-400 rounded-md">
        <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        resizeHandles={["n", "e", "s", "w", "ne", "se", "sw", "nw"]}
        compactType={null}
      >
        {_.map(layout, function(item, i) {
          return (
            <div key={i} className="bg-gray-500 flex items-center justify-center grid-item" id={i}>
              <span>{i}</span>

              <div className="absolute top-0 right-0">
                <Button
                  className="text-sm font-normal text-default-600 bg-default-100 m-2"
                  startContent="X"
                  variant="flat"
                  onClick={() => hideElement(i)}
                >
                  X
                </Button>

                </div>
            </div>
          );
        })}
      </ResponsiveGridLayout>
      </div>
    </div>
  );
}

function generateLayout() {
  const numItems = 12; // Set the desired number of items
  return _.map(_.range(0, numItems), function (item, i) {
    return {
      x: (i * 2) % 12,
      y: Math.floor(i / 6),
      w: 2,
      h: Math.ceil(Math.random() * 4) + 1,
      i: i.toString(),
      resizeHandles: ["n", "e", "s", "w", "ne", "se", "sw", "nw"],
    };
  });
}



function hideElement(id) {
  var element = document.getElementById(id);
  element.remove();
}

function randomizeElements() {
  var elements = document.getElementsByClassName("grid-item");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = getRandomColor();
  }
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++)
    color += letters[Math.floor(Math.random() * 16)];
  return color;
}
*/}

import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Button } from "@nextui-org/react";
import { Navbar } from "../components/nav-bar.component";
import { doc } from "firebase/firestore";
import AddRemoveLayout from "./components/AddRemoveLayout"; // Import the AddRemoveLayout component

export default function Home() {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [layout, setLayout] = useState(generateLayout());

  const onLayoutChange = newLayout => {
    setLayout(newLayout);
  };

  function generateLayout() {
    const numItems = 12; // Set the desired number of items
    return _.map(_.range(0, numItems), function (item, i) {
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6),
        w: 2,
        h: Math.ceil(Math.random() * 4) + 1,
        i: i.toString(),
        resizeHandles: ["n", "e", "s", "w", "ne", "se", "sw", "nw"],
      };
    });
  }

  return (
    <div>
      <Navbar />
      <Button
        className="text-sm font-normal text-default-600 bg-default-100 m-2"
        startContent="X"
        variant="flat"
        onClick={() => randomizeElements()}
      >
        Randomize
      </Button>

      <div id="DragEditor" className="m-10">
        <AddRemoveLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          resizeHandles={["n", "e", "s", "w", "ne", "se", "sw", "nw"]}
          compactType={null}
          onLayoutChange={onLayoutChange}
        />
      </div>
    </div>
  );
}