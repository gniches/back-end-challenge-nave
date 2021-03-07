module.exports = {
    dialect: 'postgres',
    host: 'ec2-34-198-31-223.compute-1.amazonaws.com',
    username: 'nooazzpjgxpfto',
    password: '4748cc04ed92b383325e95e4ac45f72a844215221372f10648410445019a2408',
    database: 'd2q1g59h7813o1',
    port: 5432,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    }
}