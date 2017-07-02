package FirstWeb.bean;

/**
 * Created by SilverNarcissus on 2017/6/14.
 */
public class UserBean {
    /**
     * 用户名
     */
    private String userName;
    /**
     * 密码
     */
    private String password;

    public UserBean() {
    }

    public UserBean(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
