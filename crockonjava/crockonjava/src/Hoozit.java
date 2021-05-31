/**
 * @author bkweusijana
 *
 */

class Gizmo
{
    protected int id;

    public Gizmo(int id)
    {
        this.id = id;
    }

    @Override
    public String toString()
    {
        return "gizmo " + this.id;
    }
}

public class Hoozit extends Gizmo
{
    protected String hoozitProp = "defaultHoozitPropValue";

    public Hoozit(int id)
    {
        super(id);
    }

    public boolean test(int some_id)
    {
        return super.id == some_id;
    }

    /**
     * @param args
     */
    public static void main(String[] args)
    {
        Gizmo gizmo = new Gizmo(0);
        Hoozit hoozit = new Hoozit(1);
        System.out.println(gizmo); // Calls gizmo.toString();
        System.out.println(gizmo.id);
        System.out.println(hoozit); // Calls hoozit.toString();
        System.out.println(hoozit.id);
        System.out.println(hoozit.test(hoozit.id));
        System.out.println(hoozit.hoozitProp);
//        System.out.println(gizmo.test(gizmo.id));// This line won't compile because Gizmos don't have a test method
    }

}