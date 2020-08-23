using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface IChangeMaster
    {
        Task FieldValueChanged(string name);
    }
}
