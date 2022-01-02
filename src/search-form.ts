import { renderBlock } from "./lib.js";
const transformDate = (year: number, month: number, day: number) => {
  let maxDays: number;
  let dayLocal: number;
  let monthLocal: number;
  // let yearLocal: number;
  let carryMonth: number;
  // console.log(year, month, day, "Input");

  switch (month + 1) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      maxDays = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      maxDays = 30;
      break;
    case 2:
      maxDays = 28;
      break;
    default:
      console.log("Wrong date");
  }

  if (day + 1 <= maxDays) {
    dayLocal = day + 1;
    carryMonth = 0;
  } else {
    dayLocal = day + 1 - maxDays;
    carryMonth = 1;
  }

  if (carryMonth === 1) {
    if (month === 11) {
      monthLocal = 1;
      year += 1;
    }
  } else {
    monthLocal = month + 1;
    year = year;
  }

  console.log(monthLocal, dayLocal, "after if");

  const date = `${year}-${
    String(monthLocal).length < 2 ? "0" + monthLocal : monthLocal
  }-${String(dayLocal).length < 2 ? "0" + dayLocal : dayLocal}`;
  console.log(date, "end of function");
  return date;
};

// transformDate(2021, 1, 25);

export function renderSearchFormBlock() {
  let day = new Date();
  const dayCheckIn = day.getDate();
  const monthCheckIn = day.getMonth();
  const yearCheckIn = day.getFullYear();
  console.log(monthCheckIn);
  console.log(dayCheckIn);

  // console.log(transformDate(2020, 10, 2));

  const checkInDate = transformDate(yearCheckIn, monthCheckIn, dayCheckIn);
  const checkOutDate = transformDate(yearCheckIn, monthCheckIn, dayCheckIn + 2);

  console.log(checkInDate);

  console.log(checkOutDate);

  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate}"
             min="05-11-2021" max="30-06-2025" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate}" min="05-11-2021" max="30-06-2025" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
//
