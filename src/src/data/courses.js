import part1 from "../assets/part1.jpg";
import part2 from "../assets/part2.jpg";
import part3 from "../assets/part3.jpg";
import part4 from "../assets/part4.jpg";

const Courses = [
    {
        id: 111,
        name: 'Physics',
        items: [
            {
                id: 1111,
                number: 1,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 21421, img: part1, title: 'Part 1', total_hours: 12, video_questions: 58, quiz_questions: 12, status: 'active'},
                    {id: 21122, img: part2, title: 'Part 2', total_hours: 17, video_questions: 55, quiz_questions: 10, status: 'active'},
                    {id: 65433, img: part3, title: 'Part 3', total_hours: 11, video_questions: 44, quiz_questions: 13, status: 'active'},
                    {id: 78932, img: part4, title: 'Part 4', total_hours: 16, video_questions: 52, quiz_questions: 17, status: 'active'}
                ]
            },
            {
                id: 1112,
                number: 2,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 54142, img: part1, title: 'Part 1', total_hours: 15, video_questions: 51, quiz_questions: 13, status: 'active'},
                    {id: 30432, img: part2, title: 'Part 2', total_hours: 18, video_questions: 46, quiz_questions: 10, status: 'active'},
                    {id: 30213, img: part3, title: 'Part 3', total_hours: 20, video_questions: 56, quiz_questions: 17, status: 'active'},
                    {id: 43211, img: part4, title: 'Part 4', total_hours: 16, video_questions: 49, quiz_questions: 11, status: 'active'}
                ]
            },
            {
                id: 1113,
                number: 3,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 41254, img: part1, title: 'Part 1', total_hours: 19, video_questions: 42, quiz_questions: 11, status: 'active'},
                    {id: 42315, img: part2, title: 'Part 2', total_hours: 16, video_questions: 53, quiz_questions: 16, status: 'active'}
                ]
            },
            {
                id: 1114,
                number: 4,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 41224, img: part1, title: 'Part 1', total_hours: 11, video_questions: 58, quiz_questions: 10, status: 'active'},
                    {id: 42142, img: part2, title: 'Part 2', total_hours: 14, video_questions: 58, quiz_questions: 19, status: 'active'},
                    {id: 43651, img: part3, title: 'Part 3', total_hours: 18, video_questions: 50, quiz_questions: 11, status: 'active'}
                ]
            }
        ]
    },
    {
        id: 222,
        name: 'Chemistry',
        items: [
            {
                id: 2223,
                number: 1,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 52398, img: part1, title: 'Part 1', total_hours: 10, video_questions: 57, quiz_questions: 14, status: 'active'},
                    {id: 52976, img: part2, title: 'Part 2', total_hours: 16, video_questions: 57, quiz_questions: 11, status: 'active'},
                    {id: 52965, img: part3, title: 'Part 3', total_hours: 12, video_questions: 44, quiz_questions: 18, status: 'active'},
                    {id: 57397, img: part4, title: 'Part 4', total_hours: 11, video_questions: 48, quiz_questions: 16, status: 'active'}
                ]
            },
            {
                id: 2224,
                number: 2,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 57394, img: part1, title: 'Part 1', total_hours: 17, video_questions: 56, quiz_questions: 11, status: 'active'},
                    {id: 57237, img: part2, title: 'Part 2', total_hours: 14, video_questions: 46, quiz_questions: 16, status: 'active'},
                    {id: 53247, img: part3, title: 'Part 3', total_hours: 19, video_questions: 51, quiz_questions: 18, status: 'active'},
                    {id: 59021, img: part4, title: 'Part 4', total_hours: 11, video_questions: 44, quiz_questions: 16, status: 'active'},
                    {id: 59402, img: part1, title: 'Part 5', total_hours: 16, video_questions: 55, quiz_questions: 15, status: 'active'}
                ]
            },
            {
                id: 2225,
                number: 3,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 53213, img: part1, title: 'Part 1', total_hours: 12, video_questions: 49, quiz_questions: 18, status: 'active'},
                    {id: 57332, img: part2, title: 'Part 2', total_hours: 18, video_questions: 51, quiz_questions: 18, status: 'active'}
                ]
            },
            {
                id: 2226,
                number: 4,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 57256, img: part1, title: 'Part 1', total_hours: 14, video_questions: 42, quiz_questions: 14, status: 'active'},
                    {id: 57120, img: part2, title: 'Part 2', total_hours: 15, video_questions: 59, quiz_questions: 10, status: 'active'},
                    {id: 573191, img: part3, title: 'Part 3', total_hours: 12, video_questions: 51, quiz_questions: 11, status: 'active'}
                ]
            }
        ]
    },
    {
        id: 333,
        name: 'English',
        items: [
            {
                id: 3331,
                number: 1,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 63397, img: part1, title: 'Part 1', total_hours: 17, video_questions: 42, quiz_questions: 17, status: 'active'},
                    {id: 63642, img: part2, title: 'Part 2', total_hours: 16, video_questions: 45, quiz_questions: 20, status: 'active'},
                    {id: 64824, img: part3, title: 'Part 3', total_hours: 13, video_questions: 40, quiz_questions: 18, status: 'active'},
                    {id: 65823, img: part4, title: 'Part 4', total_hours: 14, video_questions: 45, quiz_questions: 20, status: 'active'}
                ]
            },
            {
                id: 3332,
                number: 2,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 66723, img: part1, title: 'Part 1', total_hours: 18, video_questions: 48, quiz_questions: 18, status: 'active'},
                    {id: 61095, img: part2, title: 'Part 2', total_hours: 14, video_questions: 42, quiz_questions: 10, status: 'active'}
                ]
            },
            {
                id: 3333,
                number: 3,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 60931, img: part1, title: 'Part 1', total_hours: 13, video_questions: 60, quiz_questions: 11, status: 'active'},
                    {id: 61317, img: part2, title: 'Part 2', total_hours: 10, video_questions: 40, quiz_questions: 20, status: 'active'},
                    {id: 61111, img: part3, title: 'Part 3', total_hours: 11, video_questions: 54, quiz_questions: 17, status: 'active'},
                    {id: 62222, img: part4, title: 'Part 4', total_hours: 10, video_questions: 59, quiz_questions: 18, status: 'active'}
                ]
            },
            {
                id: 3334,
                number: 4,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 63333, img: part1, title: 'Part 1', total_hours: 13, video_questions: 44, quiz_questions: 12, status: 'active'},
                    {id: 64444, img: part2, title: 'Part 2', total_hours: 16, video_questions: 49, quiz_questions: 20, status: 'active'},
                    {id: 65555, img: part3, title: 'Part 3', total_hours: 10, video_questions: 47, quiz_questions: 17, status: 'active'}
                ]
            }
        ]
    },
    {
        id: 444,
        name: 'Maths',
        items: [
            {
                id: 4441,
                number: 1,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 71111, img: part1, title: 'Part 1', total_hours: 11, video_questions: 45, quiz_questions: 12, status: 'active'},
                    {id: 72222, img: part2, title: 'Part 2', total_hours: 16, video_questions: 43, quiz_questions: 10, status: 'active'},
                    {id: 63333, img: part3, title: 'Part 3', total_hours: 11, video_questions: 48, quiz_questions: 18, status: 'active'}
                ]
            },
            {
                id: 4442,
                number: 2,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 64444, img: part1, title: 'Part 1', total_hours: 16, video_questions: 54, quiz_questions: 15, status: 'active'},
                    {id: 65555, img: part2, title: 'Part 2', total_hours: 11, video_questions: 55, quiz_questions: 20, status: 'active'},
                    {id: 66643, img: part3, title: 'Part 3', total_hours: 19, video_questions: 49, quiz_questions: 10, status: 'active'},
                    {id: 67777, img: part4, title: 'Part 4', total_hours: 13, video_questions: 40, quiz_questions: 19, status: 'active'}
                ]
            },
            {
                id: 4443,
                number: 3,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 68881, img: part1, title: 'Part 1', total_hours: 16, video_questions: 48, quiz_questions: 17, status: 'active'},
                    {id: 69992, img: part2, title: 'Part 2', total_hours: 17, video_questions: 57, quiz_questions: 10, status: 'active'}
                ]
            },
            {
                id: 4444,
                number: 4,
                chapterTitle: 'Chapter',
                description: '',
                parts: [
                    {id: 63564, img: part1, title: 'Part 1', total_hours: 20, video_questions: 52, quiz_questions: 17, status: 'active'},
                    {id: 63462, img: part2, title: 'Part 2', total_hours: 14, video_questions: 48, quiz_questions: 12, status: 'active'},
                    {id: 69021, img: part3, title: 'Part 3', total_hours: 17, video_questions: 57, quiz_questions: 19, status: 'active'},
                    {id: 60043, img: part4, title: 'Part 4', total_hours: 16, video_questions: 59, quiz_questions: 11, status: 'active'}
                ]
            }
        ]
    }
];

export default Courses;