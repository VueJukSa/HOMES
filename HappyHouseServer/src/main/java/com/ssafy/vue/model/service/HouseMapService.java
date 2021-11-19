package com.ssafy.vue.model.service;

import java.util.List;

import com.ssafy.vue.model.ApartmentMaeMaeDto;
import com.ssafy.vue.model.HouseCodeDto;
import com.ssafy.vue.model.HouseInfoDto;
import com.ssafy.vue.model.SidoGugunCodeDto;

public interface HouseMapService {

	List<SidoGugunCodeDto> getSido() throws Exception;
	List<SidoGugunCodeDto> getGugunInSido(String sido) throws Exception;
	List<HouseInfoDto> getDongInGugun(String gugun) throws Exception;
	List<ApartmentMaeMaeDto> getAptInDong(String dong) throws Exception;
	List<HouseCodeDto> getHouseCode() throws Exception;
	
}
