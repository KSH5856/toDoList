package com.example.ToDoList.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ToDoList.model.ToDoModel;

@Repository
public interface ToDoRepository extends JpaRepository<ToDoModel, Integer> {

}
