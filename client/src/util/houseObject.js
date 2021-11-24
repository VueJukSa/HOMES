export function makeHouseSimpleObject(house, houseType) {
  let houseObject = new Object();
  if (houseType === `apt`) {
    houseObject.이름 = house.단지명;
    houseObject.도로명 = house.도로명;
    if (house.거래금액) {
      houseObject.거래금액 = house.거래금액;
    }
    if (house.전월세구분) {
      houseObject.구분 = house.전월세구분;
      if (house.전월세구분 === `전세`) {
        houseObject.보증금 = house.보증금;
      } else {
        houseObject.보증금 = house.보증금;
        houseObject.월세 = house.월세;
      }
    }
  } else if (houseType === `office`) {
    houseObject.이름 = house.단지명;
    houseObject.도로명 = house.도로명;
    if (house.거래금액) {
      houseObject.거래금액 = house.거래금액;
    }
    if (house.전월세구분) {
      houseObject.구분 = house.전월세구분;
      if (house.전월세구분 === `전세`) {
        houseObject.보증금 = house.보증금;
      } else {
        houseObject.보증금 = house.보증금;
        houseObject.월세 = house.월세;
      }
    }
  } else if (houseType === `yeonrip`) {
    houseObject.이름 = house.건물명;
    houseObject.도로명 = house.도로명;
    if (house.거래금액) {
      houseObject.거래금액 = house.거래금액;
    }
    if (house.전월세구분) {
      houseObject.구분 = house.전월세구분;
      if (house.전월세구분 === `전세`) {
        houseObject.보증금 = house.보증금;
      } else {
        houseObject.보증금 = house.보증금;
        houseObject.월세 = house.월세;
      }
    }
  } else {
    houseObject.도로명 = house.도로명;
    houseObject.연면적 = house.연면적;
    houseObject.대지면적 = house.대지면적;
    if (house.거래금액) {
      houseObject.거래금액 = house.거래금액;
    }
    if (house.전월세구분) {
      houseObject.구분 = house.전월세구분;
      if (house.전월세구분 === `전세`) {
        houseObject.보증금 = house.보증금;
      } else {
        houseObject.보증금 = house.보증금;
        houseObject.월세 = house.월세;
      }
    }
  }
  return houseObject;
}

export function makeHouseDetailObject(house, houseType) {
  let houseObject = new Object();
  if (houseType === `apt`) {
    houseObject.이름 = house.단지명;
    houseObject.도로명 = house.도로명;
    houseObject.시군구 = house.시군구;
    houseObject.이름 = house.단지명;
    houseObject.전용면적 = house.전용면적;
    houseObject.계약년월 = house.계약년월;
    houseObject.전월세구분 = house.전월세구분;
    houseObject.계약일 = house.계약일;
    houseObject.거래금액 = house.거래금액;
    houseObject.층 = house.층;
    houseObject.매매가 = house.매매가;
    houseObject.건축년도 = house.건축년도;
  } else if (houseType === `office`) {
    houseObject.이름 = house.단지명;
    houseObject.도로명 = house.도로명;
  } else if (houseType === `yeonrip`) {
    houseObject.이름 = house.건물명;
    houseObject.도로명 = house.도로명;
  } else {
    houseObject.도로명 = house.도로명;
    houseObject.연면적 = house.연면적;
    houseObject.대지면적 = house.대지면적;
  }
  return houseObject;
}
