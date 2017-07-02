package FirstWeb.bean;

/**
 * Created by SilverNarcissus on 2017/6/14.
 */
public class TestBean {
    /**
     * id
     */
    private int id;
    /**
     * 姓名
     */
    private String name;
    /**
     * 年龄
     */
    private int age;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public TestBean(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public TestBean() {
    }
}
