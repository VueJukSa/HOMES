package com.ssafy.vue.model.mapper;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.model.ApartmentMaeMaeDto;
import com.ssafy.vue.model.HouseCodeDto;
import com.ssafy.vue.model.HouseInfoDto;
import com.ssafy.vue.model.SidoGugunCodeDto;

@Mapper
public interface HouseMapMapper {

	List<SidoGugunCodeDto> getSido() throws SQLException;
	List<SidoGugunCodeDto> getGugunInSido(String sido) throws SQLException;
	List<HouseInfoDto> getDongInGugun(String gugun) throws SQLException;
	List<ApartmentMaeMaeDto> getAptInDong(String dong) throws SQLException;
	List<HouseCodeDto> getHouseCode() throws SQLException;
	String getAptTest(String dong) throws SQLException;
}
