import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
useGSAP(() => {
  // Apply a transform to the blue box using gsap.to() method
  // Move the blue box 250 pixels to the right, repeat the animation indefinitely,
  // reverse the animation every time it completes, rotate the box by 360 degrees,
  // and animate it over 2 seconds using an elastic easing function.
  // The animation will be repeated indefinitely, and the box will reverse its
  // position and rotation every time it completes.
  // The "elastic" easing function will create a smooth, elastic movement.
  //it accepts an id and some properties
  gsap.to("#blue-box", 1, {
    x: 250,
    repeat: -1,
    yoyo: true,
    rotation:360,
    duration:2,
    ease:"elastic"
  });
},[]);
  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
