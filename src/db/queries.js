const { client } = require('./connection');

const addEmployee = async (firstName, lastName, roleId, managerId) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [firstName, lastName, roleId, managerId];
    const res = await client.query(query, values);
    return res.rows[0];
};

const updateEmployeeManager = async (employeeId, managerId) => {
    const query = 'UPDATE employee SET manager_id = $1 WHERE id = $2 RETURNING *';
    const values = [managerId, employeeId];
    const res = await client.query(query, values);
    return res.rows[0];
};

const viewEmployeesByManager = async (managerId) => {
    const query = 'SELECT * FROM employee WHERE manager_id = $1';
    const values = [managerId];
    const res = await client.query(query, values);
    return res.rows;
};

const viewEmployeesByDepartment = async (departmentId) => {
    const query = `
        SELECT employee.* FROM employee
        JOIN role ON employee.role_id = role.id
        WHERE role.department_id = $1
    `;
    const values = [departmentId];
    const res = await client.query(query, values);
    return res.rows;
};

const deleteDepartment = async (departmentId) => {
    const query = 'DELETE FROM department WHERE id = $1 RETURNING *';
    const values = [departmentId];
    const res = await client.query(query, values);
    return res.rows[0];
};

const deleteRole = async (roleId) => {
    const query = 'DELETE FROM role WHERE id = $1 RETURNING *';
    const values = [roleId];
    const res = await client.query(query, values);
    return res.rows[0];
};

const deleteEmployee = async (employeeId) => {
    const query = 'DELETE FROM employee WHERE id = $1 RETURNING *';
    const values = [employeeId];
    const res = await client.query(query, values);
    return res.rows[0];
};

const getTotalBudget = async (departmentId) => {
    const query = `
        SELECT SUM(role.salary) AS total_budget FROM employee
        JOIN role ON employee.role_id = role.id
        WHERE role.department_id = $1
    `;
    const values = [departmentId];
    const res = await client.query(query, values);
    return res.rows[0].total_budget;
};

module.exports = {
    addEmployee,
    updateEmployeeManager,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    getTotalBudget,
};