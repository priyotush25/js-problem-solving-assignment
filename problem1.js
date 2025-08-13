function totalFine(fare) {
  if (typeof fare !== "number" || !fare > 0) {
    return "Invalid";
  }

  let fine = fare + (fare * 20) / 100 + 30;

  if (fine < 0) {
    return "Invalid";
  }

  return fine;
}

console.log(totalFine("Gorib tai ticket katinai"));
