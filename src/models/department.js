class Department {
    constructor(db) {
        this.db = db;
    }

    async getAllDepartments() {
        const query = `
            SELECT id, name
            FROM department;
        `;
        const result = await this.db.query(query);
        return result.rows;
    }

    async addDepartment(name) {
        const query = `
            INSERT INTO department (name)
            VALUES ($1)
            RETURNING *;
        `;
        const values = [name];
        const result = await this.db.query(query, values);
        return result.rows[0];
    }
}

module.exports = Department;