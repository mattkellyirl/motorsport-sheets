import React from "react";
import vehicleSetup from "/vehicle-setup.png";

function Solution2() {
  return (
    // <section className="relative w-full h-screen">
    //   <img
    //     src={vehicleSetup}
    //     alt="Background"
    //     className="absolute inset-0 w-full h-full object-cover z-[-1]"
    //   />
    //   <div className="relative z-10 bg-zinc-900 bg-opacity-75 w-full h-full flex items-center justify-center">
    //     <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-8">
    //       <div class="flex flex-col justify-center">
    //         <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
    //           Vehicle Data Management:
    //         </h1>
    //         <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
    //           Efficiently store and manage relevant setup data, including
    //           suspension settings, wheel alignment, fuel levels and tyre
    //           pressures.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section class="relative w-full h-screen bg-gray-100">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Vehicle Data Management:
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Efficiently store and manage relevant setup data, including
            suspension settings, wheel alignment, fuel levels and tyre
            pressures.
          </p>
        </div>
        <div>
          <img
            src={vehicleSetup}
            alt="Background"
            className="mx-auto w-full lg:max-w-xl rounded-lg shadow-xl"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Solution2;
