package FirstWeb.service;

import FirstWeb.bean.UserBean;
import FirstWeb.util.ResultMessage;

/**
 * Created by SilverNarcissus on 2017/6/14.
 */
public interface UserService {
    public ResultMessage signIn(UserBean userBean);
}
