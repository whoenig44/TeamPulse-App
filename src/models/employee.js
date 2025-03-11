class Employee {
    constructor(db) {
        this.db = db;
    }

    async addEmployee(firstName, lastName, roleId, managerId) {
        const query = `
            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [firstName, lastName, roleId, managerId];
        const result = await this.db.query(query, values);
        return result.rows[0];
    }

    async getAllEmployees() {
        const query = `
            SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, m.first_name AS manager_first_name, m.last_name AS manager_last_name
            FROM employee e
            JOIN role r ON e.role_id = r.id
            JOIN department d ON r.department_id = d.id
            LEFT JOIN employee m ON e.manager_id = m.id;
        `;
        const result = await this.db.query(query);
        return result.rows;
    }

    async updateEmployeeManager(employeeId, managerId) {
        const query = `
            UPDATE employee
            SET manager_id = $1
            WHERE id = $2
            RETURNING *;
        `;
        const values = [managerId, employeeId];
        const result = await this.db.query(query, values);
        return result.rows[0];
    }

    async viewEmployeesByManager(managerId) {
        const query = `
            SELECT * FROM employee
            WHERE manager_id = $1;
        `;
        const values = [managerId];
        const result = await this.db.query(query, values);
        return result.rows;
    }

    async deleteEmployee(employeeId) {
        const query = `
            DELETE FROM employee
            WHERE id = $1
            RETURNING *;
        `;
        const values = [employeeId];
        const result = await this.db.query(query, values);
        return result.rows[0];
    }

    async updateEmployeeRole(employeeId, roleId) {
        const query = `
            UPDATE employee
            SET role_id = $1
            WHERE id = $2
            RETURNING *;
        `;
        const values = [roleId, employeeId];
        const result = await this.db.query(query, values);
        return result.rows[0];
    }
}

module.exports = Employee;