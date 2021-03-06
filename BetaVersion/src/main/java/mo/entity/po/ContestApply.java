package mo.entity.po;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ContestApply {
    private Integer id;
    private Integer contest_id;
    private Integer user_id;
    private boolean status;

    @Override
    public String toString() {
        return "ContestApply{" +
                "id=" + id +
                ", contest_id=" + contest_id +
                ", user_id=" + user_id +
                '}';
    }
}
