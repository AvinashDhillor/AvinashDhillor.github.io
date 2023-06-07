const readLine = require('readline')
const fs = require('fs')
const mustache = require('mustache')

const DATA = {
    raw_file_data: null,
    day_number: null,
    problem_name: null,
    current_date_time: null,
    problem_level: null,
    full_problem_name: null,
    problem_level: null,
    file_name: null,
    problem_link: null
}

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readFileTemplate = async () => {
    return new Promise((resolve) => {
        fs.readFile("templates/leetcode_daily_challenge_template.md", 'utf-8', (err, data) => {
            DATA.raw_file_data = data;
            resolve();
        })
    })
}

const getCurrentDayNumber = async () => {
    const folderPath = 'content/posts/';
    return new Promise((resolve) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                console.error('Error reading folder:', err);
                return;
            }
            let todayDay = -1;
            files.forEach(file => {
                let dayNumber = (Number)(file.split('_')[1]);
                todayDay = Math.max(dayNumber, todayDay);
            });
            resolve(todayDay + 1);
        })
    })
}


const handleOtherParams = async () => {
    DATA.current_date_time = getTimeStamp();
    DATA.day_number = await getCurrentDayNumber();
}

const getTimeStamp = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timezoneOffsetHours = '05';
    const timezoneOffsetMinutes = '30';
    const timezoneOffsetSign = '+';
    const timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezoneOffsetSign}${timezoneOffsetHours}:${timezoneOffsetMinutes}`;
    return timestamp;
}

const questionsFlow = async () => {
    await new Promise((resolve) => {
        rl.question('Enter problem name : ', (name) => {
            DATA.full_problem_name = name;
            DATA.problem_name = name.substring(name.indexOf(' ') + 1);
            DATA.file_name = `Day_${DATA.day_number}_${DATA.problem_name.split(' ').join('_')}.md`
            DATA.folder_name = `Day_${DATA.day_number}_${DATA.problem_name.split(' ').join('_')}`
            rl.question('Enter Link : ', (link) => {
                DATA.problem_link = link;
                const level = ['Easy', 'Medium', 'Hard'];
                rl.question(`Enter problem level: 1 = ${level[0]}, 2 = ${level[1]}s, 3 = ${level[2]} : `, (optionNumber) => {
                    DATA.problem_level = level[optionNumber - 1];
                    rl.close();
                    resolve()
                })
            })
        });
    });
}

const generateFile = async () => {
    console.log(`Generating files....`);
    let data = mustache.render(DATA.raw_file_data, DATA)
    fs.writeFileSync(`content/posts/${DATA.file_name}`, data);
    fs.mkdirSync(`content/images/post_pics/${DATA.folder_name}`);
    console.log(`Completed!`);
}

const main = async () => {
    await handleOtherParams();
    await questionsFlow();
    await readFileTemplate();

    generateFile();
}

main();



