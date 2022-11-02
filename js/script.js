// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-03-JS/sw.js", {
    scope: "/ICS20-Unit3-03-JS/",
  })
}

/**
 * This function displays an alert.
 */
function enterClicked() {
  //input
  const radius = parseInt(document.getElementById("radius").value)

  //process
  const volumesphere = (4.0 * Math.PI * radius ** 3) / 3.0

  //output
  document.getElementById("volume-of-sphere").innerHTML =
    "The volume of the sphere is: " + volumesphere.toFixed(2) + "cm³"
}
