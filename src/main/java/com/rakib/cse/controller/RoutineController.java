package com.rakib.cse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class RoutineController {

    @RequestMapping(value = "/routine")
    public String Routine(Model model, HttpSession session, HttpServletRequest request, HttpServletResponse response) {
        SessionController.KeepSession(session);

        if (request.getMethod().equalsIgnoreCase("POST")) {
            String button = request.getParameter("button");
            if (button.equalsIgnoreCase("routineSubmit")) {
                String dept = request.getParameter("dept");
                String semester = request.getParameter("semester");
                String courseCode = request.getParameter("courseCode");
                String startTime = request.getParameter("startTime");
                String endTime = request.getParameter("endTime");
                String roomNo = request.getParameter("roomNo");
            }
        }

        model.addAttribute("cssLinkPrefix", "");
        return "routine";
    }

}
