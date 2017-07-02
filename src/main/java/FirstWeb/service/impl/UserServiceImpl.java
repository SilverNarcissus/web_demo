package FirstWeb.service.impl;

import FirstWeb.bean.UserBean;
import FirstWeb.model.User;
import FirstWeb.repository.UserRepository;
import FirstWeb.service.UserService;
import FirstWeb.util.ResultMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

/**
 * Created by SilverNarcissus on 2017/6/14.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public ResultMessage signIn(UserBean userBean) {
        System.out.println(userBean.getUserName());
        System.out.println(userBean.getPassword());
        if (userRepository.exists(Example.of(new User(userBean), ExampleMatcher.matching().withIgnorePaths("id")))) {
            return ResultMessage.SUCCESS;
        }
        return ResultMessage.FAILED;
    }
}
