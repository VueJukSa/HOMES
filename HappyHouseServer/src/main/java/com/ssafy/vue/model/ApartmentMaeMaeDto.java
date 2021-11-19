package com.ssafy.vue.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value = "ApartmentInfoDto : 아파트정보", description = "아파트의 상세 정보를 나타낸다.")
public class ApartmentMaeMaeDto {

	@ApiModelProperty(value = "시군구")
	private String sigungu ;
	@ApiModelProperty(value = "번지")
	private String bungi;
	@ApiModelProperty(value = "본번")
	private String bonbun;
	@ApiModelProperty(value = "부번")
	private String bubun;
	@ApiModelProperty(value = "단지명")
	private String danjiname;
	@ApiModelProperty(value = "전용면적")
	private String area;
	@ApiModelProperty(value = "계약년월")
	private int contyear;
	@ApiModelProperty(value = "계약일")
	private double contdate;
	@ApiModelProperty(value = "거래금액")
	private String price;
	@ApiModelProperty(value = "층")
	private int floor;
	@ApiModelProperty(value = "건축년도")
	private int buildyear;
	@ApiModelProperty(value = "도로명")
	private String roadname;
	@ApiModelProperty(value = "해제사유발생일")
	private String hjdate;
	@ApiModelProperty(value = "거래유형")
	private String selltype;
	@ApiModelProperty(value = "중개사소재지")
	private String jung;
	public String getSigungu() {
		return sigungu;
	}
	public void setSigungu(String sigungu) {
		this.sigungu = sigungu;
	}
	public String getBungi() {
		return bungi;
	}
	public void setBungi(String bungi) {
		this.bungi = bungi;
	}
	public String getBonbun() {
		return bonbun;
	}
	public void setBonbun(String bonbun) {
		this.bonbun = bonbun;
	}
	public String getBubun() {
		return bubun;
	}
	public void setBubun(String bubun) {
		this.bubun = bubun;
	}
	public String getDanjiname() {
		return danjiname;
	}
	public void setDanjiname(String danjiname) {
		this.danjiname = danjiname;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public int getContyear() {
		return contyear;
	}
	public void setContyear(int contyear) {
		this.contyear = contyear;
	}
	public double getContdate() {
		return contdate;
	}
	public void setContdate(double contdate) {
		this.contdate = contdate;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public int getFloor() {
		return floor;
	}
	public void setFloor(int floor) {
		this.floor = floor;
	}
	public int getBuildyear() {
		return buildyear;
	}
	public void setBuildyear(int buildyear) {
		this.buildyear = buildyear;
	}
	public String getRoadname() {
		return roadname;
	}
	public void setRoadname(String roadname) {
		this.roadname = roadname;
	}
	public String getHjdate() {
		return hjdate;
	}
	public void setHjdate(String hjdate) {
		this.hjdate = hjdate;
	}
	public String getSelltype() {
		return selltype;
	}
	public void setSelltype(String selltype) {
		this.selltype = selltype;
	}
	public String getJung() {
		return jung;
	}
	public void setJung(String jung) {
		this.jung = jung;
	}

	
}
