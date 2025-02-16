package com.example.ToDoList.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ToDoList.Service.ToDoService;
import com.example.ToDoList.model.RequestBodyDate;
import com.example.ToDoList.model.ToDoModel;

@RestController
@CrossOrigin
public class ToDoController {

	@Autowired
	private ToDoService service;

	@PostMapping("getListByDate")
	public List<ToDoModel> getListByDate(@RequestBody RequestBodyDate toDoModel) {
		return service.getToDoListByDate(toDoModel.getDate());
	}

	@GetMapping("getList")
	public List<ToDoModel> getList() {
		return service.getToDoList();
	}

	@PostMapping("addTask")
	public ResponseEntity<Object> addTask(@RequestBody ToDoModel toDoModel) {
		return service.addTask(toDoModel);
	}
}
