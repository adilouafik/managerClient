/**
 * Project: Atos Worldline ICT
 * Sub-project: [Sub project]
 * Application: [Application]
 * Producer: AWL
 * Version Date : 5 déc. 2016
 * Version number : 1.0
 * Author : Hicham Bousarehane
 * Contact : hicham.bousarehane@atos.net
 * Notes : <Release Notes (classified by deviation from previous versions)>
 */
package com.sban;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.sban.soap.Student;

/**
 * @author Hicham BOUSAREHANE
 * @version 1.0
 *
 */
@Component
public class StudentUtility {
	private Map<Integer, Student> studentMap = new HashMap<Integer, Student>();

	public StudentUtility() {
		Student s1 = new Student();
		s1.setStudentId(1);
		s1.setName("Ram");
		s1.setAge(20);
		s1.setClazz("ABC");
		studentMap.put(1, s1);
		Student s2 = new Student();
		s2.setStudentId(2);
		s2.setName("Shyam");
		s2.setAge(22);
		s2.setClazz("EFG");
		studentMap.put(2, s2);
	}

	public Student getStudent(int studentId) {
		return studentMap.get(studentId);
	}
}
