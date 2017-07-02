package FirstWeb.repository;

import FirstWeb.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Created by SilverNarcissus on 2017/6/14.
 */
public interface UserRepository extends JpaRepository<User, Integer> {

    @SuppressWarnings("JpaQlInspection")
    //there is nothing wrong with this method
    @Query("SELECT COUNT(u) FROM User u WHERE u.userName = ?1 AND u.password = ?2")
    public int checkSignIn(String userName, String password);
}
