import React from "react";
import Typewriter from "typewriter-effect";
import { data } from "../../utils/data";

function Type() {
  return (
    <>
      {data?.titles.map((title, index) => (
        <div class="py-3 py-lg-0 py-md-0">
          <Typewriter
            key={index}
            options={{
              strings: title?.title,
              autoStart: title?.autoStart,
              loop: title.loop,
              deleteSpeed: 0,
              pauseFor: title?.pauseFor,
            }}
          />
        </div>
      ))}
    </>
  );
}

export default Type;
