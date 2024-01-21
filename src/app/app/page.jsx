'use client';
import React from "react";
import _ from "lodash";

import { Responsive, WidthProvider } from "react-grid-layout";
import { Button } from "@nextui-org/react";
import { Navbar } from "../components/nav-bar.component";

export default function Home() {
  /*
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  */

  const ResponsiveGridLayout = WidthProvider(Responsive);
  const layout = generateLayout();
  return (
    <div>
      <Navbar />

      <div id="DragEditor" className="bg-gray-200 m-10">
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
            <div key={i} className="bg-gray-500 flex items-center justify-center" id={i}>
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
  return _.map(_.range(0, 25), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (i * 2) % 12,
      y: Math.floor(i / 6),
      w: 2,
      h: y,
      i: i.toString(),
      resizeHandles: ["n", "e", "s", "w", "ne", "se", "sw", "nw"],
    };
  });
}

function hideElement(id) {
  var element = document.getElementById(id);
  element.remove();
}