import Particles from "react-tsparticles";
import React from "react";
import "../components/pages/Home/Homestyle.css";


function Particle() {
  return (
    <>
    <div className="particles-container">

      <Particles
        width="100%"
        height="100px"
        params={{
          particles: {
            number: {
              value: 109,
              density: {
                enable: true,
                value_area: 800, //density...circles per unit area type(dec)
              },
            },
            color: {
              value: "#6d8fb6",
            },
              

            shape: {
              type: "circle", //star,square,triangle,point with lines
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 6,
              },
            },
            line_linked: {
              enable:false,
              distance: 100,
              opacity: 0.9,
              width: 1,
              shadow: {
                enable: true,
                color: "#e74c3c",
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 0.6,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 40,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.4,
              anim: {
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
    </div>

    </>
  );
}

export default Particle;
