package com.rgunindi.management.repository;

import com.rgunindi.management.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStudentRepository extends JpaRepository<Student,Integer> {
}
