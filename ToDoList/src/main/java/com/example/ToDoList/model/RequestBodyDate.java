package com.example.ToDoList.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class RequestBodyDate {

	@JsonFormat(pattern = "yyyy-M-d")
	private LocalDate date;
}
