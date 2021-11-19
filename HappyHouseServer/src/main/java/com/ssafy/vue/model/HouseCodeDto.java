package com.ssafy.vue.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "HouseCodeDto : 집 정보", description = "집 정보를 나타낸다.")
public class HouseCodeDto {

	@ApiModelProperty(value = "집 종류 코드")
	private int id;
	@ApiModelProperty(value = "집 종류 이름")
	private String name;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
