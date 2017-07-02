package FirstWeb.model;

import FirstWeb.bean.UserBean;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by SilverNarcissus on 2017/6/14.
 */
@Entity
public class User {
    /**
     * 用户id
     */
    @Id
    private int id;
    /**
     * 用户名
     */
    private String userName;
    /**
     * 密码
     */
    private String password;

    public User() {

    }

    public User(UserBean userBean) {
        this.userName = userBean.getUserName();
        this.password = userBean.getPassword();
    }

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
