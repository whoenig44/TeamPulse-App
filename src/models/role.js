class Role {
    constructor(db) {
        this.db = db;
    }

    async getAllRoles() {
        const query = `
            SELECT r.id, r.title, r.salary, d.name AS department
            FROM role r
            JOIN department d ON r.department_id = d.id;
        `;
        const result = await this.db.query(query);
        return result.rows;
    }

    async addRole(title, salary, departmentId) {
        const query = `
            INSERT INTO role (title, salary, department_id)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const values = [title, salary, departmentId];
        const result = await this.db.query(query, values);
        return result.rows[0];
    }
}

module.exports = Role;