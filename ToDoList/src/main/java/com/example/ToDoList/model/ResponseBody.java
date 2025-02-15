package com.example.ToDoList.model;

import lombok.Data;

@Data
public class ResponseBody {
	private String message;
	private boolean isError;
}
