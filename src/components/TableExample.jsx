import PropTypes from "prop-types";

const TableExample = ({ users }) => {
  return (
    <>
      <table className="w-full h-screen my-4 gap-3 text-[#8E8E8E]">
        <thead className="mt-4 h-[48px]  bg-[#F1F6FB]">
          <tr className="text-left ">
            <th className="text-[#413E4D] w-[276px]">
              <span className="ml-[72px]">Fecha y Hora</span>
            </th>
            <th className="text-[#413E4D] w-[240px]">Número de desembolso</th>
            <th className="text-[#413E4D] w-[236px]">Tipo de documento</th>
            <th className="text-[#413E4D] w-[256px]">Número de documento</th>
            <th className="text-[#413E4D] w-[176px] mr-4">Monto</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={`h-[48px] ${index % 2 ? "bg-[#F7F7F7]" : "bg-white"}`}
            >
              <td>
                <span className="ml-[72px]">{user.fechaHora}</span>
              </td>
              <td>{user.numeroDesembolso}</td>
              <td>{user.tipoDocumento}</td>
              <td>{user.numeroDocumento}</td>
              <td>${user.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TableExample.propTypes = {
  users: PropTypes.array.isRequired,
};

export default TableExample;
