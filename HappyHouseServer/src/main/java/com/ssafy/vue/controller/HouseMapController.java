package com.ssafy.vue.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.model.ApartmentMaeMaeDto;
import com.ssafy.vue.model.HouseCodeDto;
import com.ssafy.vue.model.HouseInfoDto;
import com.ssafy.vue.model.SidoGugunCodeDto;
import com.ssafy.vue.model.service.HouseMapService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/map")
@Api("Map 컨트롤러  API V1")
public class HouseMapController {
	
	private final Logger logger = LoggerFactory.getLogger(HouseMapController.class);

	@Autowired
	private HouseMapService haHouseMapService;
	
	@ApiOperation(value = "시도 정보", notes = "전국의 시도를 반환한다.", response = List.class)
	@GetMapping("/sido")
	public ResponseEntity<List<SidoGugunCodeDto>> sido() throws Exception {
		logger.info("sido - 호출");
		return new ResponseEntity<List<SidoGugunCodeDto>>(haHouseMapService.getSido(), HttpStatus.OK);
	}
	
	@ApiOperation(value = "구군 정보", notes = "전국의 구군을 반환한다.", response = List.class)
	@GetMapping("/gugun")
	public ResponseEntity<List<SidoGugunCodeDto>> gugun(@RequestParam("sido") @ApiParam(value = "시도코드.", required = true) String sido) throws Exception {
		logger.info("gugun - 호출");
		return new ResponseEntity<List<SidoGugunCodeDto>>(haHouseMapService.getGugunInSido(sido), HttpStatus.OK);
	}
	
	@GetMapping("/dong")
	public ResponseEntity<List<HouseInfoDto>> dong(@RequestParam("gugun") String gugun) throws Exception {
		return new ResponseEntity<List<HouseInfoDto>>(haHouseMapService.getDongInGugun(gugun), HttpStatus.OK);
	}
	
	@GetMapping("/houselist")
	public ResponseEntity<List<ApartmentMaeMaeDto>> apt(@RequestParam("dong") String dong, @RequestParam("houseCode") int houseCode) throws Exception {
		if(houseCode==1) {
			return new ResponseEntity<List<ApartmentMaeMaeDto>>(haHouseMapService.getAptInDong(dong), HttpStatus.OK);
		} else {
			return new ResponseEntity<List<ApartmentMaeMaeDto>>(haHouseMapService.getAptInDong(dong), HttpStatus.OK);
		}
	}
	
	
	@ApiOperation(value = "집 종류 정보", notes = "집 종류를 반환한다.", response = List.class)
	@GetMapping("/housecode")
	public ResponseEntity<List<HouseCodeDto>> housecode() throws Exception {
		logger.info("housecode - 호출");
		return new ResponseEntity<List<HouseCodeDto>>(haHouseMapService.getHouseCode(), HttpStatus.OK);
	}
	
}
