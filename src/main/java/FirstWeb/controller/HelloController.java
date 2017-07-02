package FirstWeb.controller;

import FirstWeb.bean.ResultBean;
import FirstWeb.bean.TestBean;
import FirstWeb.bean.UserBean;
import FirstWeb.service.UserService;
import FirstWeb.util.ShellUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/test")
public class HelloController {

    @Autowired
    UserService userService;

    @ResponseBody
    @RequestMapping(value = "/people",
            params = {"id"},
            method = RequestMethod.GET,
            produces = {"application/json; charset=UTF-8"})
    public TestBean index(@RequestParam(value = "id") int id) {
        System.out.println("return");
        System.out.println(ShellUtil.getResultOfShellFromCommand("python3 /Users/SilverNarcissus/Documents/git_project/python-paragraph-analyze"));
        return new TestBean(id, "Silver", 21);
    }

    @ResponseBody
    @RequestMapping(value = "/python",
            params = {"id"},
            method = RequestMethod.GET,
            produces = {"application/json; charset=UTF-8"})
    public TestBean test(@RequestParam(value = "id") int id) {
        System.out.println("return2");
        System.out.println(ShellUtil.getResultOfShellFromCommand("python3 /Users/SilverNarcissus/Documents/git_project/python-paragraph-analyze"));
        return new TestBean(id, "Silver", 21);
    }

    @ResponseBody
    @RequestMapping(
            value = "/user/signup",
            method = RequestMethod.POST,
            produces = {"application/json; charset=UTF-8"})
    public ResultBean signUp(
            @RequestBody UserBean userBean){
        return new ResultBean(userService.signIn(userBean).toString());
    }
}  