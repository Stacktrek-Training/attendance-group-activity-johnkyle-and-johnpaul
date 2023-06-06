function checkAttendance(status) {
    if (status === "minahal" || status === "nasaktan" || status === "nagmahal") {
      return "present";
    } else {
      return "absent";
    }
  }
  
  console.log(checkAttendance("minahal"));
  console.log(checkAttendance("iniwan"));
  console.log(checkAttendance("nasaktan"));
  console.log(checkAttendance("present"));
  console.log(checkAttendance("nagmahal"));
  
  
  