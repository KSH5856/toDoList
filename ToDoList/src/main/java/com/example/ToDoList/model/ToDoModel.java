package com.example.ToDoList.model;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "ToDoList")
@Data
public class ToDoModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "task")
	private String task;

	@Column(name = "is_completed")
	private boolean isCompleted;

	@Column(name = "date")
	@JsonFormat(pattern = "yyyy-M-d")
	private LocalDate date;
}
