CREATE TABLE Login (
    Login_id INT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);


CREATE TABLE Departments (
    Department_id INT IDENTITY(1,1) PRIMARY KEY,
    department_name VARCHAR(50)
);

CREATE TABLE company_details (
    company_id INT IDENTITY(1,1) PRIMARY KEY,
    company_name VARCHAR(100),
    username VARCHAR(50),
    password VARCHAR(50),
    email VARCHAR(100),
    company_telephone_no VARCHAR(20)
);


CREATE TABLE Company_wise_departments (
    Company_wise_Department_id INT IDENTITY(1,1) PRIMARY KEY,
    Company_id INT,
    Department_id INT,

    CONSTRAINT FK_Company
        FOREIGN KEY (Company_id)
        REFERENCES company_details(company_id),

    CONSTRAINT FK_Department
        FOREIGN KEY (Department_id)
        REFERENCES Departments(Department_id)
);

CREATE TABLE Category (
    category_id INT IDENTITY(1,1) PRIMARY KEY,
    category_name VARCHAR(100)
);


CREATE TABLE Equipments (
    Equipment_id INT IDENTITY(1,1) PRIMARY KEY,
    equipment_name VARCHAR(100),
    purchase_date DATE,
    company_wise_department_id INT,
    serial_no VARCHAR(100),
    category_id INT,
    company_id INT,

    CONSTRAINT FK_Equip_CompanyWiseDept
        FOREIGN KEY (company_wise_department_id)
        REFERENCES Company_wise_departments(Company_wise_Department_id),

    CONSTRAINT FK_Equip_Category
        FOREIGN KEY (category_id)
        REFERENCES Category(category_id),

    CONSTRAINT FK_Equip_Company
        FOREIGN KEY (company_id)
        REFERENCES company_details(company_id)
);

CREATE TABLE Team (
    team_id INT IDENTITY(1,1) PRIMARY KEY,
    team_head_name VARCHAR(100),
    team_name VARCHAR(100),
    category_id INT,

    CONSTRAINT FK_Team_Category
        FOREIGN KEY (category_id)
        REFERENCES Category(category_id)
);


CREATE TABLE Team_members (
    team_member_id INT IDENTITY(1,1) PRIMARY KEY,
    team_id INT,
    role VARCHAR(100),
    category_id INT,

    CONSTRAINT FK_TeamMembers_Team
        FOREIGN KEY (team_id)
        REFERENCES Team(team_id),

    CONSTRAINT FK_TeamMembers_Category
        FOREIGN KEY (category_id)
        REFERENCES Category(category_id)
);


CREATE TABLE workcenter (
    workcenter_id INT IDENTITY(1,1) PRIMARY KEY,
    workcenter_name VARCHAR(100),
    code VARCHAR(50),
    tag VARCHAR(50),
    alternative_workcenters VARCHAR(200),
    cost_per_hour INT,
    capacity INT,
    OEE_target VARCHAR(50)
);


CREATE TABLE request (
    request_id INT IDENTITY(1,1) PRIMARY KEY,
    created_name VARCHAR(100),

    equipment_id INT,
    equipment_name VARCHAR(100),

    category_id INT,
    request_date DATE,
    maintenance_type VARCHAR(50),

    team_id INT,
    schedule_date DATE,
    duration INT,
    priority VARCHAR(50),

    company_id INT,
    workcenter_id INT,

    CONSTRAINT FK_Request_Equipment
        FOREIGN KEY (equipment_id)
        REFERENCES Equipments(Equipment_id),

    CONSTRAINT FK_Request_Category
        FOREIGN KEY (category_id)
        REFERENCES Category(category_id),

    CONSTRAINT FK_Request_Team
        FOREIGN KEY (team_id)
        REFERENCES Team(team_id),

    CONSTRAINT FK_Request_Company
        FOREIGN KEY (company_id)
        REFERENCES company_details(company_id),

    CONSTRAINT FK_Request_Workcenter
        FOREIGN KEY (workcenter_id)
        REFERENCES workcenter(workcenter_id)
);