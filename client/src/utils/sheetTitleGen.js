export function sheetTitleGen(eventName, carName, sessionName, driverName) {
  let titleParts = [];

  // Ensure all inputs are strings to avoid undefined errors
  eventName = eventName || "";
  carName = carName || "";
  sessionName = sessionName || "";
  driverName = driverName || "";

  // First part of the title
  if (eventName.startsWith("Test")) {
    titleParts.push("TEST");
  } else {
    const championshipCode = eventName
      .match(/\b(\w)/g)
      .join("")
      .toUpperCase();
    titleParts.push(championshipCode);
  }

  // Add a separator
  titleParts.push("-");

  // Third part of the title (car model)
  const carModel = carName.split(" ")[1]?.substring(0, 3).toUpperCase() || "";
  titleParts.push(carModel);

  // Add a separator
  titleParts.push("-");

  // Fourth part of the title (session code)
  if (eventName.startsWith("Test")) {
    const sessionCode = sessionName
      .match(/\b(\w)/g)
      .join("")
      .toUpperCase();
    titleParts.push(sessionCode);
  } else {
    const sessionCode = sessionName.substring(0, 3).toUpperCase();
    const sessionLastDigit = sessionName.match(/\d+$/)?.[0] || "";
    titleParts.push(`${sessionCode}${sessionLastDigit}`);
  }

  // Add a separator
  titleParts.push("-");

  // Last part of the title (driver initials)
  const driverCode = driverName
    .match(/\b(\w)/g)
    .join("")
    .toUpperCase();
  titleParts.push(driverCode);

  // Join all parts to form the final title
  return titleParts.join("");
}

export default sheetTitleGen;
