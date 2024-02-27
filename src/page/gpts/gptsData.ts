const data =[
    {
        "icon": "https://cos.aitutu.cc/gpts/gpt4all.jpg",
        "description": "集合官方GPT-4、联网，多模态（gpt-4v），绘图功能（dall-e3），限制不支持function等",
        "gptsId": "gpt-4-all",
        "author_name": "",
        "title": "gpt-4-all"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SxYQO0Fq1ZkPagkFtg67DRVb?se=2123-10-12T23%3A57%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dagent_3.webp&sig=pLlQh8oUktqQzhM09SDDxn5aakqFuM2FAPptuA0mbqc%3D",
        "description": "让我将你的想象变成图像 – 基于 ChatGPT",
        "gptsId": "gpt-4-gizmo-g-2fkFE8rbu",
        "author_name": "",
        "title": "DALL·E"
    },
    {
        "icon": "https://cos.aitutu.cc/gpts/3.5net.png",
        "description": "官网的gpt-3.5 相对与api的3.5更聪明些，限制不支持function等",
        "gptsId": "gpt-3.5-net",
        "author_name": "",
        "title": "gpt-3.5-net"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8KwDUWXMXpDSQlChsEyT9nd2?se=2123-10-18T15%3A49%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcf2adbac-0a40-41de-8450-4d28fa2918ea.png&sig=9xLeHuk6JSCt43wxvQ%2BgC76pVtS2az7Cl%2Buuo8tQFio%3D",
        "description": "优化学术论文，按句提供编辑和说明",
        "gptsId": "gpt-4-gizmo-g-UPuGbvUJn",
        "author_name": "",
        "title": "论文润色大师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-id374Jq85g2WfDgpuOdAMTEk?se=2123-10-13T00%3A31%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dagent_2.png&sig=qFnFnFDVevdJL3xvtDE8vysDpTQmkSlF1zhYLAMiqmM%3D",
        "description": "将任何文件上传，我可以帮助分析和可视化您的数据 – 基于ChatGPT",
        "gptsId": "gpt-4-gizmo-g-HMNcP6w7d",
        "author_name": "",
        "title": "数据分析"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YBNv2c4UR3QMgi6NEMauLL3n?se=2123-10-18T06%3A14%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5a876488-4407-4d18-9be9-f91392406e01.png&sig=5vtG14aI4yuJ8IL75zcEjllZ3QoGSzBqGODuDZU1PJU%3D",
        "description": "灵感创作，无限抽卡（by 欧sir）",
        "gptsId": "gpt-4-gizmo-g-YL87j8C7S",
        "author_name": "",
        "title": "超强LOGO生成器"
    },
    {
        "icon": "https://cos.aitutu.cc/gpts/gpt4all.jpg",
        "description": "我是GPT-4的高级版本，通过提供logically-structured和跨域响应，同时利用清晰度脱颖而出",
        "gptsId": "gpt-4-gizmo-g-jzyVE3qaS",
        "author_name": "",
        "title": "GPT-4 Pro Max"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nWWeIdwmYZv23IR08Os4NumJ?se=2123-10-18T03%3A41%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D88e0916b-5b17-4f9f-8c25-5d5e255347a6.png&sig=fsAzlySBTMBuqHS9QR1Hw3RGkHEB4ayNNfblLHiJ5cw%3D",
        "description": "代码大师是一款能够审查代码、编写拉取请求、生成和优化函数、编写测试并注释现有代码的应用",
        "gptsId": "gpt-4-gizmo-g-k3IqoCe1l",
        "author_name": "",
        "title": "代码大师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Hc7eDPXKjR5fTHl61lHOhPYQ?se=2123-10-18T15%3A33%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddegang.jpeg&sig=B38bxcW0z/QR/qp8shHFMfbRHVvcZvNadCh8e0Ee3zc%3D",
        "description": "窗前明月光，我是郭德纲",
        "gptsId": "gpt-4-gizmo-g-qdhTcI4hP",
        "author_name": "",
        "title": "郭德纲"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YEOwpz10x5m9FGybrLTFR3Kp?se=2123-11-23T02%3A26%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3D65705a0e-af8b-4b7b-88c0-b2028736285c.png&sig=TwZPg4wEl/5sf9LFyrfG34VcHDJ7zP0cKgEGWc4lKnI%3D",
        "description": "模仿董宇辉风格，深度解读中国各地文化",
        "gptsId": "gpt-4-gizmo-g-dse9iXvor",
        "author_name": "",
        "title": "董宇辉小作文助手"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-T1Wdhn4r7h9uc53omN0BloHf?se=2123-10-17T07%3A56%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DPDF.png&sig=b491R2aBRJd%2BKYu1mPvRAR8ohUcrLimRQ0Fyws8AmAM%3D",
        "description": "Voice-active multilingual file reader",
        "gptsId": "gpt-4-gizmo-g-OJWqJKLiE",
        "author_name": "Muhanli.com",
        "title": "PDF Reader"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-y6jo8cnsXtZ2muiAYAl0giGH?se=2123-10-24T06%3A55%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=odi5P25X4UbUpn0d2IaKXr3aCyRg%2B/yUuGmkxYT%2B%2BQg%3D",
        "description": "具有大量模板的视频或设计创意，带有自动画外音和元素的文本到视频。",
        "gptsId": "gpt-4-gizmo-g-Gpu8ZMR52",
        "author_name": "",
        "title": "CapCut"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-evwaZW9e22ofsxHdQYPbaRPu?se=2123-10-15T06%3A26%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-07%252014.55.59%2520-%2520Craft%2520an%2520icon%2520that%2520epitomizes%2520a%2520Chief%2520Technology%2520Officer%2520%2528CTO%2529%2520robot%252C%2520signifying%2520the%2520apex%2520of%2520technical%2520authority.%2520The%2520robot%2520should%2520have%2520a%2520regal%2520and%2520au.png&sig=dhP6amJ2HYoWzkTU7uZv/JHIn2KM5DWvoFmesPdAWPc%3D",
        "description": "将所有你的电子表格问题可视化解决方案",
        "gptsId": "gpt-4-gizmo-g-DQUsp1nSk",
        "author_name": "",
        "title": "数据可视化"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ygx0QBwrUyL5tFVojozCGJiD?se=2124-01-05T12%3A58%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3D4AAD6F740E85800BF75D3A251BEDCAB1.png&sig=a8azP1FqvN6CksWk55YFgqf4rrVUqgI7dgScXBNj7TU%3D",
        "description": "这个GPT将帮助你设计微信红包封面，并加工成符合微信红包像素和图片大小规范的图。你可以通过三个方式生成图：1）简单描述你的需求，比如“水彩画风格的龙”；2）提供完整的文生图prompt；3）上传任意图片，我将给你生成类似的",
        "gptsId": "gpt-4-gizmo-g-uPrZzWhc4",
        "author_name": "",
        "title": "微信红包封面设计"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DupqtfFIpFdkqUAPOC02mRQ1?se=2123-10-17T06%3A03%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da8d9031b-ca1f-42f1-8262-385e7a084e30.png&sig=27MtMGyFRX0ExY4kRx/37mFZa12uuaS9Q05tBvn8nh0%3D",
        "description": "「はい」か「いいえ」で答えられる質問でお題を当ててね",
        "gptsId": "gpt-4-gizmo-g-mHhlGATeo",
        "author_name": "SATOSHI SAKAI",
        "title": "イエス・ノークイズ"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0Jyx7Q4EUe0VZG7bH0wJGqls?se=2123-10-17T20%3A14%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfc4994ba-7551-4a84-9e73-f9462295abe3.png&sig=pUwRxAAAfpMKvxODKWsKlTKHLEUlzWUwIs2Zo3Kz6to%3D",
        "description": "Channeling Warren Buffet's wisdom to offer timeless, tailored advice.",
        "gptsId": "gpt-4-gizmo-g-fYtFCiy7X",
        "author_name": "Sandro Gvelesiani",
        "title": "Warren Buffet's Wisdom"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-51n76YArpAekUspwkmmPrVPN?se=2123-10-18T03%3A58%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DFallacyFinderProfile.png&sig=fSAZ8SAWkdOa9EBy%2BnaSrJpK95j4KZf/qcE8UOIrRcs%3D",
        "description": "Eager and humorous detector of text fallacies, avoiding controversy (maybe).",
        "gptsId": "gpt-4-gizmo-g-UeBeQ1LNb",
        "author_name": "Eric Wilkinson",
        "title": "Fallacy Finder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AkVozDykiss6MMzkyoxvHTqe?se=2123-10-19T17%3A40%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7e50859a-e749-4df8-aeec-71beb0224a50.png&sig=Zw2dsCeW4h5vOdG0NeDL6XEt/pXWqogVN/XF3W1tHyw%3D",
        "description": "Aiia assists in architecture and engineering projects.",
        "gptsId": "gpt-4-gizmo-g-sl6GrNX5f",
        "author_name": "ADRIAN MUELLER",
        "title": "Architecture Assistant aiia Switzerland"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-t3AEp89lHFOBA1hz7XLgIEQu?se=2123-10-21T17%3A39%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1af3e10c-e529-40ef-b647-737b9b097118.png&sig=VldOgGyNK7ThABVOujq4Cy6rk7qh3g8cXelt/iVWduY%3D",
        "description": "Advanced AI Expert in welding and NDT, offering excellent guidance.",
        "gptsId": "gpt-4-gizmo-g-rrViM5r69",
        "author_name": "Askar Aisautov",
        "title": "Welding and NDT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XhYZmfMJkBmfvhMS20p1uj7s?se=2123-10-17T03%3A56%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D57258917-f00f-4573-86d1-145490c55ec5.png&sig=z5iMVFffT1Bv2qPz88tbWHD%2BTFxTjdBuG%2BpYVn6lnp4%3D",
        "description": "Startup document generator for Florida entrepreneurs.",
        "gptsId": "gpt-4-gizmo-g-m46nwV5Z0",
        "author_name": "John Montague",
        "title": "Florida Entrepreneur Startup Documents Package"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-O8QM6gb7sHpgHKCa4SkvxQYd?se=2123-10-23T00%3A14%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd335f454-9d79-4e75-a286-f7bcc9b7e850.png&sig=K8/OHvRrAxVl7QM0Sk4hlUAbmeDz/8Ff90nqcB4xUew%3D",
        "description": "A master in grammar and essay writing for Enem.",
        "gptsId": "gpt-4-gizmo-g-C9iFou7fl",
        "author_name": "CHARLES RICARDO FLORIANO",
        "title": "Enem Essay Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iYTWuUjOHg82EeiVf8C1LCkm?se=2123-10-16T22%3A34%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DStevo_old_english_bookshop_high_ceilings_large_windows_bookshop_12f87978-e4d4-4d20-985d-c469cff8527e.png&sig=og%2B8EAN4DH%2B6zqNglRhGIeHxGbB/rn67CFYCm4rWoro%3D",
        "description": "Your ticket to the moon",
        "gptsId": "gpt-4-gizmo-g-0UcanlBjd",
        "author_name": "Artemisrelay2.uk",
        "title": "Hitchhiker's Guide to Cardano"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-T3R7KvjJgzerwaFteUT0ZRfw?se=2123-10-18T11%3A49%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D523e8b96-3a92-42b2-a447-8996d5811277.png&sig=OoV7GxYIvraMtrJbzfIotifmRhZ0E3mOxLSLNzcyAdM%3D",
        "description": "Crafts captions for images, focusing on creativity and context.",
        "gptsId": "gpt-4-gizmo-g-ZIcTKSajf",
        "author_name": "Leslie Prints",
        "title": "Caption Crafter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-l1N2o65iwjp1tqWrDxu05utB?se=2123-10-18T16%3A14%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De7baffc2-1193-4290-a873-2c0ce2dc5fb7.png&sig=Te9rwzSHJjtfct97x6oP743S40KlHzKKqEbv4sQFVJc%3D",
        "description": "Provides verification with live links.",
        "gptsId": "gpt-4-gizmo-g-zoALrjHHV",
        "author_name": "Tom Evslin",
        "title": "Fact or Fiction"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6tPPoiKRSXe6FzPdORKL2GZU?se=2123-10-17T07%3A17%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D06306318-9078-446e-b6db-9b5d304e768f.png&sig=YnQwch3fLzfRBHb4ZBI%2BQwj8UDNZ3QKOIyQv/R193%2BA%3D",
        "description": "Leave a message for others to find... What will you say?",
        "gptsId": "gpt-4-gizmo-g-zAf7zBE8N",
        "author_name": "Kyle Shrader",
        "title": "GuestBook GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Nnk1TfmFKLuqLlj3tFVa9GYO?se=2123-10-17T22%3A13%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D46601ecd-3bb2-46b8-a77b-5d047e1bc552.png&sig=CilnlSDUtFPwZhewoXe4YAWmmUcfZNGkn%2BnD0AZwvWg%3D",
        "description": "Conversational GPT for continuous, personalized business growth strategies.",
        "gptsId": "gpt-4-gizmo-g-W0Lnzyb5R",
        "author_name": "Firas Abdulwahed",
        "title": "Growth Hack Genie"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vDaIiclXEnvdGqVNFWd5pc3j?se=2123-10-20T16%3A47%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7766fa74-24fa-4342-8cea-80b1fe9fcee7.png&sig=bR/sGI6U4d1oQ74BFCiY9O4roK%2BOu0uazBZo0SjtS1Y%3D",
        "description": "Esperto di religione cattolica e santi, collegato a chiesa.ai",
        "gptsId": "gpt-4-gizmo-g-X1lMGmoG6",
        "author_name": "Davide Zanon",
        "title": "Guida Cattolica"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IYHhoEvo6xfiX5pYGCLLPZsJ?se=2123-10-16T17%3A08%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D52caaf6f-39a7-4f58-8461-bbf4039154b3.png&sig=dfokObQbs9PcvjSTnBsvvOzX%2Bzy7YcYIx5lcHimX%2Bf4%3D",
        "description": "Your cool, savvy friend",
        "gptsId": "gpt-4-gizmo-g-W0aSKZkMw",
        "author_name": "David Kohlmey",
        "title": "Cool GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SValQ7nAjp3eMAyFAzSiRsDV?se=2123-10-17T05%3A07%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DML%2520-App%2520Icon-02.png&sig=/UgqUjC5INNsMbej2gx1MYPdfhQcNKRfHyxmRVZzKYQ%3D",
        "description": "Learn technology and speak to our live mentors if you need help",
        "gptsId": "gpt-4-gizmo-g-x4IsOBZlc",
        "author_name": "Millionlights University",
        "title": "Mentor Max"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4GE7wQSBDIyBckaJJZ0VhQKR?se=2123-10-18T17%3A09%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd61cd5c3-ce07-445f-a5cb-782f2443fdea.png&sig=8uhYI8MWpVnB4RSaxkkj63TGxxRDm4gOtveBN65VuTE%3D",
        "description": "Dune-inspired advisor and spiritual guide.",
        "gptsId": "gpt-4-gizmo-g-xvCAs4yXb",
        "author_name": "Josh Atlas",
        "title": "Mentat Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-auifMs7Q8ilil012tpm7II2x?se=2123-10-21T00%3A12%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Defb6fb21-ad78-4a19-8935-c1b5beef559d.png&sig=TOSBhwVso3Ig0YwpOGj20BLNomwxTLVlEAzHLpjF6z4%3D",
        "description": "An inquisitive researcher linking mysteries to science. Member of the Hipster Energy Team. https://hipster.energy/team",
        "gptsId": "gpt-4-gizmo-g-YWLa50rfW",
        "author_name": "Eric Lortie",
        "title": "Gödel's Phenomena Analyst"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sEa6L9Uxgp1YbtBcl8lvgpwm?se=2123-10-17T23%3A34%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df6abdfda-3f56-4d25-977f-01bf00c3c68e.png&sig=ANr%2BnFe0/s3jisDcjsOhKG1871yqMUmZOOorPnRWrno%3D",
        "description": "Guide for whimsical space-themed architecture game.",
        "gptsId": "gpt-4-gizmo-g-yUG054URH",
        "author_name": "Vicki Essary",
        "title": "Cosmic Hopper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-X9dyWIZaWrD6fKUe9cUlN3Hn?se=2123-10-16T19%3A57%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6d4cb188-a0ad-497b-9ddc-7d4c4dd121db.png&sig=2fuvBTtqXQ1y7Nxp2v6V9362BvWoyUaRFhFCABn%2BLEY%3D",
        "description": "Cornell Tech MBA consultant",
        "gptsId": "gpt-4-gizmo-g-v7D68uV50",
        "author_name": "Huang Kai",
        "title": "Cornell Tech MBA Counselor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-G3fVIh0Xq9xX0RE8NAoVNir6?se=2123-10-16T23%3A40%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc60f53bc-a00f-463b-abf4-edaaa4b8229d.png&sig=O17E3oEQXSikNw2FUfS%2BQjr21cFMo3JyKW5B0aWeybg%3D",
        "description": "Artificial Intelligence | Machine Learning | Computer Science Tutor",
        "gptsId": "gpt-4-gizmo-g-viE8SKiwz",
        "author_name": "Abderrahman Alami-Afilal",
        "title": "Cortex Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Kcl0YB8XTfv7ISLNVrmcyisl?se=2123-10-16T23%3A57%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dff43f890-f03e-472c-bdd6-c86a673a1bf1.png&sig=i%2BmI4f8IhCiapWSTSwNHVsFryPn5XalRtd49SPti7Hg%3D",
        "description": "Helps YouTubers write copyright disputes",
        "gptsId": "gpt-4-gizmo-g-yCpX4nus8",
        "author_name": "Shawn Fraine",
        "title": "Copyright Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YZXIHWGplATX6TEmgdKAP4l5?se=2123-10-20T22%3A58%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4b0d5254-8457-44ab-985b-6832cfed2a77.png&sig=/GYQgebMLS9YULk8n5waFJC8g4iWvmBz6SWP3usmfAY%3D",
        "description": "Specialist in corporate finance, offering strategic insights and best practices.",
        "gptsId": "gpt-4-gizmo-g-Y1bCEZDyK",
        "author_name": "Jacob Thomas",
        "title": "Corporate Finance GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AXx72Tn8QpTcybYEnwjqrl2E?se=2123-10-21T13%3A36%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D74d6a658-e78e-41bc-b4a0-12a9af38f87e.png&sig=fNg9jjFrqrwZXamAip9o8AssbIMtXjL/kpNkbwWslUc%3D",
        "description": "Designs expert-level Meta Ads campaigns from questionnaire data.",
        "gptsId": "gpt-4-gizmo-g-xcwy0ngdl",
        "author_name": "GOULIANOS D.",
        "title": "Meta Ad Campaign Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OyqTMlAZnSFk3PXGZBRuHMto?se=2123-10-17T22%3A03%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8bbfa86a-1b52-4719-973e-5dc20188a0e6.png&sig=LEY0TEgd8c%2BQciycEXdfikj87osbGrynbHQIkjt6lJU%3D",
        "description": "Tailors flowcharts with tech stack recommendations per node.",
        "gptsId": "gpt-4-gizmo-g-VWkfszvfW",
        "author_name": "Jorge A Gil",
        "title": "Mermaid Architect"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6mm9aNdk3Yypuj69J1JPk7dc?se=2123-10-21T22%3A27%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9e140abd-3e6b-44f7-a8b6-54f32d57500b.png&sig=Sp9qavsTAx7xkXZaVD8kJVk5JvN/KnEPkTPr0gzQTUo%3D",
        "description": "AI expert in custom merchandise design, aiding in concept realization.",
        "gptsId": "gpt-4-gizmo-g-ZtlQ3pIrF",
        "author_name": "Nicholas Schumacher",
        "title": "Merch Maker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mKf5FRK2FkscTDCD2GRPu4IZ?se=2123-10-17T08%3A51%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D837807a4-efc3-49e4-a4cf-5941f7d0eb98.png&sig=i7NOq0HVv01n51w7REtqY7E8ZtS9cixD8ovHN5yVV8Q%3D",
        "description": "Regele GPT ce încearcă să 'paseze' răspunsuri precise și să 'marcheze' puncte cu inteligența sa artificială.",
        "gptsId": "gpt-4-gizmo-g-YeHLZxsdt",
        "author_name": "Andrei Vintila",
        "title": "HaGPTi"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UPlpxzmigLAMbb7mob4sjmYS?se=2123-10-16T12%3A19%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5e9ba7db-5923-47c9-9453-75b244628e24.png&sig=TNCY5zmX4A9tuELF%2BoybYJ79%2B9fIOHSmNEXAsmn56HA%3D",
        "description": "Your habit-forming coach",
        "gptsId": "gpt-4-gizmo-g-wNgaNYouO",
        "author_name": "Vensy Krishna",
        "title": "Habit Mastery"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5NiBPU0BjKCBYC6twhnijgtv?se=2123-10-21T01%3A53%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7fa0f54f-a2bf-4380-a46b-27507af09bab.png&sig=Cg5OEZcBZfD9il4Hqi3joa3gRPLJrk09QCpr8ZCArPI%3D",
        "description": "Quick HTML code generator and advisor",
        "gptsId": "gpt-4-gizmo-g-yNC4QYGHr",
        "author_name": "Christina Kumar",
        "title": "HTML Mentor AI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-JXgsulgA0JrUKEFePspgMTQL?se=2123-10-17T01%3A18%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D358e06aa-b1ad-4b7b-8753-23d9df5a0ce2.png&sig=Gd39RVnTkS6J0/%2BPbkS35krUO/QiX2XRdpPZQpJlSu4%3D",
        "description": "I challenge ideas to provoke thought.",
        "gptsId": "gpt-4-gizmo-g-Xgf5oBbeg",
        "author_name": "Timothy L Constantine",
        "title": "Counterpoint"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hwP0ahKeCO4aOLw66ww75L6z?se=2123-10-18T03%3A45%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4216a1b6-8bcc-42e0-84d0-fdb5c77bcf3c.png&sig=N4vkOb5Nyh0y0sc6T7gyVIch2xfgAaNZq9Rk7lW2FhI%3D",
        "description": "Psychic reader with keyword highlights.",
        "gptsId": "gpt-4-gizmo-g-vQk5QEzBV",
        "author_name": "Roberto Meireles",
        "title": "Cosmic Oracle"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KHyL5WHB8qVtk4xYzeILOESA?se=2123-10-17T14%3A37%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db2eb4348-9431-42c3-b513-2b1e9067f76f.png&sig=vKS5cEx2XCIWGcoqvPR7KSKkqs28dEiKGHMkcWa8RJU%3D",
        "description": "Expert in metamaterials, focusing on electromagnetic and material science.",
        "gptsId": "gpt-4-gizmo-g-vKXx33K4M",
        "author_name": "楊博宇",
        "title": "Metamaterial GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KSyRroodmWh7JNtV2DFWZdMQ?se=2123-10-16T23%3A21%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De0d0953b-9c2f-4803-bc19-b044bb62d593.png&sig=DAH0TBmY4hVjCYAZBhOxCynwSyt84lYLFwhIJshgiRQ%3D",
        "description": "I craft personalized cover letters.",
        "gptsId": "gpt-4-gizmo-g-vhMBJVDEW",
        "author_name": "Yue Niu",
        "title": "Cover Letter Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-eUnrcMTNgiyhKspcRoB6h2eM?se=2123-10-17T23%3A20%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252018.17.14%2520-%2520A%2520dark%2520and%2520intense%2520profile%2520picture%2520for%2520MetalGPT%252C%2520embodying%2520the%2520essence%2520of%2520metal%2520music.%2520The%2520image%2520should%2520feature%2520a%2520sinister%252C%2520gothic%2520aesthetic%2520with%2520elem.png&sig=3cifnoOX6aSVrZLKLjCylpRn7XcUcDIjyCsiyCxCbxc%3D",
        "description": "cryptic metal oracle, weaving dark tales of metal lore",
        "gptsId": "gpt-4-gizmo-g-XUgIVpiqs",
        "author_name": "AJ Smith",
        "title": "MetalGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rH2OLe0ZXVyPgaXsKZmwtdQO?se=2123-10-16T17%3A00%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7f83c97e-de35-4ce0-9f7d-b96227081b1e.png&sig=Fw0Q/yM0uqHXrGK1QpFf27w%2BvC4%2BRKQHSZLdLVF9pKo%3D",
        "description": "I'm a pretentious art critic showcasing MetalisaNFT's art.",
        "gptsId": "gpt-4-gizmo-g-Xm3nkVljY",
        "author_name": "natalia alperovich",
        "title": "Metalisa Art Critic"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3wdq8DmbITr3e6nDpcBCk4Ct?se=2123-10-17T10%3A15%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D22ca8717-f768-4ca6-b7f8-8ee21d9f79ca.png&sig=xBJ1YvKeJDpCLFlzMQuLPNnBboxuejzPEXnQ/jJRjEc%3D",
        "description": "Upload your classroom materials (such as doc, ppt,PDF, etc.) and provide answers based on the original text",
        "gptsId": "gpt-4-gizmo-g-VzENzIMFP",
        "author_name": "SHIJIAHAO",
        "title": "Course Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-a5U6D49O1uzzh3mgZYA3EMTf?se=2123-10-16T11%3A29%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D515f898d-916e-498b-9799-0fd5e1313e01.png&sig=W8zHqkvBC5/LMyTjhtvA5nYsrKy3fY5P2M4R2HRo4Jo%3D",
        "description": "Se trata de una prueba de concepto para evaluar si puede ser un asistente amigable e interesante para niños y niñas que estén aprendiendo a programar con Scratch",
        "gptsId": "gpt-4-gizmo-g-yzH19nzMu",
        "author_name": "JESUS MORENO LEON",
        "title": "Mi colega de programación con Scratch"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-p1q6aktvieHnIKeOCMLCO96V?se=2123-10-17T16%3A50%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D291e3f5a-502b-44bd-94e8-95f56723d3b2.png&sig=hJa97JjCDV2Ec0qTE1aybbLyAU/lK2ezbZE2S8wleRQ%3D",
        "description": "Crafting serene weather haikus and tranquil images.",
        "gptsId": "gpt-4-gizmo-g-xygCsKzCo",
        "author_name": "Nate Lorenzen",
        "title": "Haiku Skies"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WWB5tb3jDcjX13sSFNvAfBSw?se=2123-10-18T10%3A07%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DChatGPT.jpg&sig=c0UTTlk9zpcmkHYF6W8RhqVJs0wLLTEYUfs27k2Sprw%3D",
        "description": "Your friendly cooking guide with recipe suggestions.",
        "gptsId": "gpt-4-gizmo-g-vZuCMTkjM",
        "author_name": "Ziyu Huang",
        "title": "Happy Kitchen"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MPzw0qkpICKsSgXunf7Urkiz?se=2123-10-17T16%3A56%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddfa39e24-fae1-45f0-8bb0-db9502c06c2f.png&sig=3/l%2BUh6UPG4lNrRCzk9XlWnqaPf8fSUp/aUKRfCd8TI%3D",
        "description": "Resourceful guide for military careers, provides recruiter info.",
        "gptsId": "gpt-4-gizmo-g-WUVeqs0Kl",
        "author_name": "Ociel Lerma",
        "title": "Military Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-E9vSxwUOTyjutvhjdSSi493f?se=2123-10-18T02%3A48%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd1ad5c1a-6aa4-4a8f-a5f9-303f171ac347.png&sig=ZCzLEK9cFCxt2Mnispn%2BW7/40RNF6TgnLauiFU6VtjM%3D",
        "description": "Sharing decades of migraine wisdom & biblical healing in a trendy, relatable way!",
        "gptsId": "gpt-4-gizmo-g-zJ2vLt9vM",
        "author_name": "Angela Chwastek",
        "title": "Migraine Breaker Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KBMXjh1xgJrj6bjTIHkjc991?se=2123-10-19T02%3A19%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6066ad82-f851-4db2-89ef-f9fee1f0785a.png&sig=4BxqRnAjdP3t5i7b24NxkeJP8CTnXRCU5SatsY0NOFM%3D",
        "description": "A fun, engaging health adviser with personalized tips and use of visuals.",
        "gptsId": "gpt-4-gizmo-g-Z6MWk7PT9",
        "author_name": "faw",
        "title": "Health Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CwG3REYdk301rCjI67MAdgGK?se=2123-10-16T09%3A58%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db658551d-f94a-409c-ae87-ce021e84d214.png&sig=XgW8D4hk4DNb6QyKLxaJ3CvAVreZOqp8vGyc3OiaHy4%3D",
        "description": "Creates TikTok video titles and hashtags.",
        "gptsId": "gpt-4-gizmo-g-zZUGJFIfC",
        "author_name": "Muhammad Osama bin Amer",
        "title": "Hashtagger"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-r3earfJr5jbkmySpoLWLulpO?se=2123-10-16T22%3A00%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3b3545a0-c3ab-4394-bb9e-bc004be8c2de.png&sig=N1Dq43ve2EO7FqcG/y5oB0K9tGiul4D0czMCQWh1CFM%3D",
        "description": "Mental health assistant guiding through reflective journaling.",
        "gptsId": "gpt-4-gizmo-g-YAmDYMJq3",
        "author_name": "Anthony Carlos Teixeira",
        "title": "MindMateGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zqZjHDXhmj5gHAxkMo51I9ok?se=2123-10-18T10%3A44%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc1b22b36-4486-44f2-8cff-f3f11a0d169c.png&sig=0KYvPxKD/QA8w%2BJM/jM1nZsJHAM0XoLydxtrnTDHvX0%3D",
        "description": "Guiding hand for overcoming addiction with empathy and quick intervention.",
        "gptsId": "gpt-4-gizmo-g-Xk6am5MS0",
        "author_name": "Asad Mehmood",
        "title": "Mindful Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TeuGsFEf4SN2XU0pXoPqktRe?se=2123-10-18T23%3A11%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D10a22ac5-ee11-4790-9c01-7b5d4f1f28a6.png&sig=eoCAlAlxEH8JK//HXavEa/38VTfRmaCL0qCOuH5HutU%3D",
        "description": "Empathic support and guidance for managing stress and PTSD: you are not alone",
        "gptsId": "gpt-4-gizmo-g-w0DExmW8A",
        "author_name": "Bertoglio Massimiliano",
        "title": "Mindfulness, Stress Management and PTSD"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tM5Z4ruraG9C3Lch1CKAN3H7?se=2123-10-16T23%3A52%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3bd20540-de6c-4a3d-b018-2b87582e2f18.png&sig=j0CPW5BuPSwU50bP3/LG%2BjbBfU8YiKb7NIaTE/glZYc%3D",
        "description": "I'm an ideas generator for marketers.",
        "gptsId": "gpt-4-gizmo-g-Xg71rNPfM",
        "author_name": "Mirwan Mirwan",
        "title": "Creative Spark"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-m5tUOHFZVQFbAu3QIPGmJIYN?se=2123-10-21T10%3A14%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da86b1164-7f32-4f4a-b2f9-5c633b589652.png&sig=LlXdgy4LAk7MS5BrdGf7gyGexvMtwD3wnhFQRLflH0E%3D",
        "description": "A helpful and empathetic assistant for customer service inquiries.",
        "gptsId": "gpt-4-gizmo-g-Xvl2uzaVw",
        "author_name": "Legal Economic and Operations Service GmbH",
        "title": "Helpful Assistant Legal EOS"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VvPvA8qjz1o2wQIgluA5ehYX?se=2123-10-17T01%3A52%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc54edb89-942c-4523-8a5e-6ec161e0c234.png&sig=bRzZ%2BnymBa0qeiq6VjizdypCxUrlmRgAPwg%2BzcSmLV4%3D",
        "description": "Decorator GPT that transforms spaces with visual aids",
        "gptsId": "gpt-4-gizmo-g-zeKnQ8pah",
        "author_name": "Michael Spivey",
        "title": "Helpful Decorator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4HWgEtBH0xn2zs09Vrh5WfBL?se=2123-10-18T07%3A21%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De14f078d-5f55-4443-9be4-1785edac4b19.webp&sig=VaTEvk/xxZ4gjdPc8GHChC3wITqXmH6UopmvTpo/74o%3D",
        "description": "Creates parallel fantasy adventures mirroring real life.",
        "gptsId": "gpt-4-gizmo-g-v8D12uMOG",
        "author_name": "Zhen Wang",
        "title": "Mirror Your World"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-39ooh8HJoruqiMAEVjYr529b?se=2123-10-18T14%3A55%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd8253359-beca-4a34-89e9-92e0c786378c.png&sig=P792sEznOZfNEaoIDMdUg0P77IFYmRkABSI4Ah8iu9M%3D",
        "description": "Creador de letras al estilo Miree con enfoque en anime y cultura pop",
        "gptsId": "gpt-4-gizmo-g-WWb7SmfL9",
        "author_name": "enrique",
        "title": "Miree Lyric Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bW5g55wTkCK2R3owy9OfKDOk?se=2123-10-19T17%3A24%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D79488fec-5fcc-425e-a87d-52e66f39f203.png&sig=mUOcsGDET209tq2DXdAreUAmL20MjDr5MKF/jMP9dQo%3D",
        "description": "Interactive mini golf course designer & modifier.",
        "gptsId": "gpt-4-gizmo-g-yrcBooK2P",
        "author_name": "botbiz.ai",
        "title": "Mini Golf Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3pldriZGQFuBTcOWccWYs2rw?se=2123-10-17T20%3A06%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df0ac6c68-fc06-4d3b-8fcc-e867bfacb290.png&sig=8cmz4c7waM6XSYMLsL0bxYtsjcdi4bhv1kfamK1egaw%3D",
        "description": "Versatile Audio Engineering Expert",
        "gptsId": "gpt-4-gizmo-g-ZbiBciKco",
        "author_name": "Kurt Wimmers",
        "title": "Mix Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Gw5iF6IKuFDR8hjinvxLYALr?se=2123-10-16T04%3A00%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3fa1cf78-710b-4729-ad27-3b8de8a1cf80.png&sig=sc%2BFXw8NWPKlo%2BFnKEAcr8CHzVqmO6K0qbuFDfCeTX4%3D",
        "description": "Interactive credit card advisor",
        "gptsId": "gpt-4-gizmo-g-zASWMYXBt",
        "author_name": "Stephen Flanders",
        "title": "Credit Card Matchmaker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0apOK2MKIgNPFEclQ017x3G7?se=2123-10-17T16%3A11%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D81d3b619-db47-426c-b779-b3f82a8da2da.png&sig=NB2Hp1XRHUIgX0VdWpXZIuimkVKXc5tPXlnD0rfkfE0%3D",
        "description": "Cultivating clarity and depth, a 'Critical Thinker' meticulously deconstructs and analyzes topics, turning ambiguity into insightful understanding.",
        "gptsId": "gpt-4-gizmo-g-WsaNe7txX",
        "author_name": "Marilee Bartoletti",
        "title": "Critical Thinker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LxhKiLPSLu6VgWcIHYaRZ0Vd?se=2123-10-21T09%3A52%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1caec947-5e6d-4732-a137-b10cd34466d7.png&sig=g6mZY5Iz2tigPFK52pOiM6k6Z8jFhn7pLdDST5XegUU%3D",
        "description": "Formal, encouraging virtual cricket coach.",
        "gptsId": "gpt-4-gizmo-g-x5h7zNdzj",
        "author_name": "madhu r",
        "title": "Cricket Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TTANWgrVr1aWImYELf1r5gy2?se=2123-10-20T05%3A18%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9551c81c-5d65-4281-b862-29fb3ca86e34.png&sig=%2BM7Xr4R53I9u6iJ3jRUYrVXemttifVz2pJAh8tp063c%3D",
        "description": "Your source for detailed cricket info, with source citations.",
        "gptsId": "gpt-4-gizmo-g-WqBDzVBYL",
        "author_name": "RUPESH S YADALA",
        "title": "Cricket Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2U6JmYLH1w3zVVdX4nDbyG6l?se=2123-10-16T21%3A53%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D51021675-7aa9-4ca4-a56a-21a89d81351a.png&sig=kbeVSf12fzjeuQPxj6NZJpdFWWLOv5na/n5wVpoSDxI%3D",
        "description": "Your cheeky Aussie bot for home advice.",
        "gptsId": "gpt-4-gizmo-g-xsIbCElbB",
        "author_name": "KYLE F O'DONNELL",
        "title": "Hey, Mate!"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Uyjn3Cww819zqdypd8xMPGJ3?se=2123-10-17T16%3A03%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5d48be66-2e5d-4496-ba90-6bed5d881c52.png&sig=pEsJYMHfwiwEqfhFii20CkkC1VVnu3jJsNt8EdA5IDw%3D",
        "description": "Scientific advice with a cultural bridge for parents.",
        "gptsId": "gpt-4-gizmo-g-yiYMwiGUy",
        "author_name": "Yi Zhang",
        "title": "Modern Asian Parenting Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dmciqXZMpxcqQofUNWbtGYGI?se=2123-10-22T05%3A37%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbd74de42-8ea9-47c9-908a-7b1657a60667.png&sig=EA7TA1tZueYddiauijqX598cP/xTOat8nt33V%2BCVhNw%3D",
        "description": "Customer service expert for product inquiries and issue resolution.",
        "gptsId": "gpt-4-gizmo-g-xyMeZm4GH",
        "author_name": "Danna Michelle Levin",
        "title": "Customer Service Rep"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gwem2f1tEX8EeOD0oHjMrMuN?se=2123-10-18T08%3A35%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db7e7b857-b4a2-4ded-bb02-cb9bf39cfcc3.png&sig=pXmNo3Kt21FRoBoQnbLf9FgX2MLiciAwJVFvRGDMCMw%3D",
        "description": "Your go-to guide for hotel recommendations worldwide.",
        "gptsId": "gpt-4-gizmo-g-vxqBOUFj3",
        "author_name": "Frank SWall",
        "title": "Hotel Expert Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7JNhHItVMVbAgGz0cTkmGPtP?se=2123-10-21T06%3A37%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3e1fcb0d-9ab0-44c7-9f03-9594571305f6.png&sig=ogtSmDfxG8Dx0FL7TJFJc45cxBhzC7MBnSX2tUxkmzM%3D",
        "description": "Expert Mumbai real estate advisor, adaptable and informative.",
        "gptsId": "gpt-4-gizmo-g-Wy7C5FYLj",
        "author_name": "madhu r",
        "title": "Mumbai Property Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RQfqKNs8wtSlzTH637NyF132?se=2123-10-20T15%3A43%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5a4252cd-a65c-4f14-a93b-09726e93171f.png&sig=WWlEfpYPTk19B8hioF3bMUpnPEG8orvcehDHau7u8EY%3D",
        "description": "Friendly and conversational MS companion, empathetic and informative.",
        "gptsId": "gpt-4-gizmo-g-ZdzcTUug6",
        "author_name": "Simon Lorenzen",
        "title": "Multiple Sclerosis MS Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3mUglhZ9ZRmLfah0aRb0xvuH?se=2123-10-18T10%3A09%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D360dedde-29ef-4c81-8760-5cc091871b40.png&sig=O2kfpOrfWVRdGreRU1vT%2BsenyBCE%2BiC5kPHA4Dhkhhk%3D",
        "description": "Music theory guide from basics to advanced.",
        "gptsId": "gpt-4-gizmo-g-wxZTVRtMO",
        "author_name": "Nick Wavish",
        "title": "Music Maestro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jH1lETMz24jpwMuIDFWiRg1e?se=2123-10-16T03%3A54%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfbb51463-a9f1-47cd-a274-96815e287d06.png&sig=MtxU7x/35%2BNLsIp4rJvzLm27ySB2vNiyOKRvRLzxpVU%3D",
        "description": "Grizzled coder with a Rust & Go bias and a side of humor.",
        "gptsId": "gpt-4-gizmo-g-xyKIXurPb",
        "author_name": "Diego Alzate",
        "title": "Hype Code Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hF9OMbuaxZPHd2Uc3aZPbYHp?se=2123-10-21T05%3A31%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D32e0d9aa-fec5-4914-9789-19c8c0732fb1.png&sig=I0wqad2dSIci4%2BQn0W8tejcF6av85qW2b9FEo6RRbNw%3D",
        "description": "Guiding your hustle from idea to income!",
        "gptsId": "gpt-4-gizmo-g-ypPA8gc87",
        "author_name": "Edgar Carbajal",
        "title": "Hustle Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mba5SXFotECg0rwNdiw2whMW?se=2123-10-19T19%3A34%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5425f519-1707-4cf9-9ca2-bfafac20c3b3.png&sig=dLtWNBVimYpRY6iYaDWMr0UU7773kpKNs78AvrhLA7Y%3D",
        "description": "A knowledgeable and enthusiastic travel planner, creating personalized itineraries.",
        "gptsId": "gpt-4-gizmo-g-VbCyWrRcu",
        "author_name": "Evelyn Wagner",
        "title": "My Trip Planner"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-x6PymHHtPeMAL8xl93BqQAIT?se=2123-10-16T19%3A04%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0cbe16f7-0b80-4cc8-8924-b320bd8bc47e.png&sig=0QCbJY4pXYlBmERMVORA2iEu7GSM7gPc7Az77t%2BilA0%3D",
        "description": "i will be your private doctor",
        "gptsId": "gpt-4-gizmo-g-zouSfk9IG",
        "author_name": "logan",
        "title": "My Doctor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bm7LFKcp0vmsFHnOLbOfe9Yp?se=2123-10-16T04%3A01%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D310b6383-8624-4be1-8f9b-9c7be837841f.png&sig=1w8VGuuEf2pgNySXIVrI4WpJCgt4G4wGQAYOC4wDhVw%3D",
        "description": "Your Stoic philosophy guide for daily living.",
        "gptsId": "gpt-4-gizmo-g-yETuSa4MN",
        "author_name": "Basilio Farano",
        "title": "I Am Stoic"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mEwxUJGHjGT4F7ZpqRpnS4HO?se=2123-10-21T13%3A57%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D966a33ae-a0cd-43ad-a54e-21216cd460af.png&sig=%2BWx%2BY9jD5CJzWbhC59ToGnVsjXu2YCpC/sF8c/x5hmU%3D",
        "description": "Friendly Real Estate AI",
        "gptsId": "gpt-4-gizmo-g-VPpnPFjp6",
        "author_name": "lim vinsern",
        "title": "Real Estate GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3gNuuDfdW4eF3BzMGMEAdOVK?se=2123-10-17T03%3A31%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D702e65ba-4368-4652-901a-0cf75e51c3c0.png&sig=j34sZQe/RRsI6tybS2GXTAQo0ZJSg4iDkvv4RRWpZuA%3D",
        "description": "I craft ultra-minimalist, 2D flat icons.",
        "gptsId": "gpt-4-gizmo-g-yS2lJCkJ0",
        "author_name": "Tim Ofenbach",
        "title": "Icon Crafter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4qwTQUfh8u0AEHPnFQR8t8Qc?se=2123-10-17T05%3A09%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3a9b1800-884a-4dd7-ad75-f8f508a6a77d.png&sig=bFOcQAA%2BndA3jivh2WWA6zyezJuG5j5qIngNOF7LLqE%3D",
        "description": "What does your future hold?",
        "gptsId": "gpt-4-gizmo-g-VcwK2iXYR",
        "author_name": "Jesus Olivas",
        "title": "Mystic 8 Ball GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-w82nJxG1T3YsBnjiiiRdCuhV?se=2123-10-19T05%3A14%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D62b5ed6d-098f-495f-8787-c3a35ac48dcb.png&sig=%2BQ5WgrXpCTfKEwIw%2BMPipob36ZBOb%2Bbi%2BI3MQ1iHNRg%3D",
        "description": "IELTS Writing and Speaking Trainer",
        "gptsId": "gpt-4-gizmo-g-z2kDJYJ24",
        "author_name": "Li Song",
        "title": "IELTS Exam Practice Hub"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kUvUlxj16IXFAUm2IGHrVIxm?se=2123-10-16T10%3A32%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8d8cd5c7-e396-44e6-a399-2c14dd589026.png&sig=pi/4XkYrOqL23AQGAX8mrNCmtYBXx8orip1tzQU86jQ%3D",
        "description": "Football app assistant providing news, updates, and gaming advice.",
        "gptsId": "gpt-4-gizmo-g-wqlvYZzFo",
        "author_name": "MOHAMED HACHEM",
        "title": "MyFootball"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8a8t4tafcbZq9OBODCOfLc3x?se=2123-10-18T05%3A05%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfd9bc82c-b0aa-48fc-a0fc-c06eae5f073a.png&sig=mQ/LgoHcsl2oze4oKhCZLFKEbWagJTdyM5MVnpa2Wm4%3D",
        "description": "Professional IFRS expert, adept at analyzing documents for financial reporting.",
        "gptsId": "gpt-4-gizmo-g-UwhClxZ3X",
        "author_name": "Temwa Nyirenda",
        "title": "IFRS-GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rEvjMAidNcHglLoHAOoi2dep?se=2123-10-17T08%3A29%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd54376ae-1dde-475e-907a-d88c4242a30f.png&sig=QyQwWDrdYtgLskdCeD%2Bp/z%2BeM04RyNbY1ObagmSVEws%3D",
        "description": "Nurturing guide for self-discovery.",
        "gptsId": "gpt-4-gizmo-g-YtjpQtBNn",
        "author_name": "Albert Brown",
        "title": "INFJ Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9YAXF28VgXFyVo81XHo39QNC?se=2123-10-18T05%3A14%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D99a47067-d3fa-4cc1-9eb1-526e48bea298.png&sig=E9n9PM0KQgpWdAG8Qf3Sx3IvtCo8e%2BtAi11kx490PmI%3D",
        "description": "Expert in ISO27001 and ISO/IEC 27002 best practices.",
        "gptsId": "gpt-4-gizmo-g-VaZzX0Ppp",
        "author_name": "tetsuya nihommatsu",
        "title": "ISO Guardian"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yLgAIlRDh0W0wHTbcU5GPmlK?se=2123-10-14T03%3A56%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1635f71b-6b0f-4746-9117-fc8f78ceff05.png&sig=eolI1tPpL2smoTHie0TBzoA3h/4edg2icJxUr9netxI%3D",
        "description": "Expert on mushroom cultivation techniques.",
        "gptsId": "gpt-4-gizmo-g-WgFGoBZVb",
        "author_name": "Christopher Blanco",
        "title": "Mycelium Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DcpdjnkeF9LYixYtILYdKhRV?se=2123-10-18T10%3A06%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd365a227-4975-4768-9feb-1f4fc1646ce4.png&sig=TYtHa6OceTiznAj1eeG2DdXmN9Nra6uLAZnA2wlEzwM%3D",
        "description": "A comprehensive guide on recovery from compulsive gambling",
        "gptsId": "gpt-4-gizmo-g-y2afOyuCd",
        "author_name": "Mr C J Lee",
        "title": "Recovery Sage"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MAfylvmUb4m2xXIynSnEFD9O?se=2123-10-14T09%3A14%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9c71b782-d47c-4325-bdc5-b2650b35859a.png&sig=t%2BEXcuiMhPtjXKo0yV0hbr1ZkFmeLVo74VPJEUHWIh8%3D",
        "description": "Your efficient receipt processing buddy",
        "gptsId": "gpt-4-gizmo-g-WEi7DGCb3",
        "author_name": "Andrej Baranovskij",
        "title": "Receipt Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BvGPaMYF6kz6T4KaxXnoXux7?se=2123-10-16T22%3A53%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D62ab4e0d-6561-44b1-a340-4d42a8c3ef2a.png&sig=IoPczLzULYbAxj2Ixab%2Bw701Sbkc4ovzEbEIpC4Cuew%3D",
        "description": "A helpful assistant for DMs running Dungeons & Dragons campaigns. Create towns, shops, characters, monsters, items, plots, encounters and more!",
        "gptsId": "gpt-4-gizmo-g-VPMViSlto",
        "author_name": "Daniel Erickson",
        "title": "Mythological"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Rm0P3BCYVb8ZMiG8jRZRQMhV?se=2123-10-18T23%3A08%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D79940d47-9a7e-4def-b1e9-15d39f2101e4.png&sig=Fc2Y4MEgikqKxw1PMrqhvz%2BZi0Whsy0G%2BAvP7TR4kWY%3D",
        "description": "Interactive NBA sim with real stats for serious play, or whimsy for casual fun.",
        "gptsId": "gpt-4-gizmo-g-zru0NH9i2",
        "author_name": "Flavius Beniamin Lador",
        "title": "NBA Career Simulator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZBN2lSVk5ayzIJLeEiHhLgmv?se=2123-10-18T01%3A30%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dec5366d2-f5cd-455f-9e54-db746233a88a.png&sig=ONt4xJt43cwtVJ1O1JSw39SHKFuoMpBVbDB2EgzuFoA%3D",
        "description": "Your AI companion for creativity and productivity.",
        "gptsId": "gpt-4-gizmo-g-zhhC7A9cA",
        "author_name": "Josh Brent N. Villocido",
        "title": "Ideas"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-z8KpAT1R8jzECQt2AtsyCOYe?se=2123-10-17T15%3A46%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcb2951da-8c75-46b6-82fd-7d7e17009a75.png&sig=kCdgLH//avjqC1aMvsdNWHwSm6YkDygvXRNW08re9xc%3D",
        "description": "A Software Developers little PM",
        "gptsId": "gpt-4-gizmo-g-uYCL9xDbG",
        "author_name": "Joseph Pellegrino",
        "title": "Herman"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RFBJLWyCZOotPhgRH02QXxb2?se=2123-10-16T02%3A31%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4b92c90b-df00-451d-860a-ce966ffc1607.png&sig=5uJuyKDRLArpM/pdPsEeATT5uIkyqRexOZ9WG4h5S44%3D",
        "description": "Your crypto currency guide.",
        "gptsId": "gpt-4-gizmo-g-yLkqZJjWr",
        "author_name": "CHOY SENG KIM",
        "title": "Crypto Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nl9ag00bpNbXCVownVUTXBcQ?se=2123-10-21T20%3A18%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfe2b8d10-a91b-4657-8b89-606c9cfeb51d.png&sig=RLHCN5bJGCkXhAuqEr6oZpXrSZVIGRG%2B9HUVVI2Ihl0%3D",
        "description": "A personal Blockchain & Crypto advisor",
        "gptsId": "gpt-4-gizmo-g-xFu4rhamm",
        "author_name": "Norem ab",
        "title": "Crypto Hypno"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bu87LyxEkjtJJ70ZEpjDQz20?se=2123-10-18T21%3A44%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da1fa2b56-507e-412b-9e5c-77a0c27c3ed6.png&sig=xkAEEemjA1nSN9TcDgAczufAP6THSm%2BpdQ9Gds5ExVQ%3D",
        "description": "Advanced crypto analysis with real-time data and trend insights",
        "gptsId": "gpt-4-gizmo-g-WWJ6RZ5Ea",
        "author_name": "Eric Rafael Ramos Suárez",
        "title": "Crypto Market Maven"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HcPzVNGMwlZFjqJXETgAAtCA?se=2123-10-20T23%3A01%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De71fe173-cf41-457f-b12a-1c52a49f7834.png&sig=ClZm51Nbq/AeJx06KZgZnYJl8jjw5AZVXkSWaDbWqDI%3D",
        "description": "Guide pour créer des évaluations FLE personnalisées",
        "gptsId": "gpt-4-gizmo-g-VdBiPIxT4",
        "author_name": "KARIM MEJRI",
        "title": "Mon assistant FLE : Créateur d'Évaluation"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4XfKqDt5uc9P7tkTqKG2nqOk?se=2123-10-16T23%3A46%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddb2abfc6-0c1b-4a53-b51e-5eb53495fda8.png&sig=RJs0Zmxuk2bytyB8ECNawkcOsBwYcPiPyw48nPRw2Ag%3D",
        "description": "I'm a Radio DJ who suggests music based on your mood.",
        "gptsId": "gpt-4-gizmo-g-v5jPBQvg3",
        "author_name": "YUTA MIZUKAMI",
        "title": "Mood FM DJ"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LiYyPbJ6z3ALgGRyCFt1W0zS?se=2123-10-17T01%3A33%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D24a76404-06ed-4a2e-85c0-20b919c4220a.png&sig=uqfr%2B52E1NHjtG8pBfh3cR%2BbFSbbLWmMX1/QFZ%2BzHP8%3D",
        "description": "I am here to inspire and motivate you",
        "gptsId": "gpt-4-gizmo-g-zWGHzuN4P",
        "author_name": "checkfu.com",
        "title": "Motivational Speaker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-65Agq5R7n6PrGrf1t0TW1Ua5?se=2123-10-22T03%3A20%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dacd1241c-e513-4d8a-b07e-0d1c784288a6.png&sig=LUvdBpdK5bDdTgO7lEiHpQDL2Igf6feUifhaUEMG46k%3D",
        "description": "Expert in home design and architecture, aiding in creative and functional ideas.",
        "gptsId": "gpt-4-gizmo-g-uWM4Sy99I",
        "author_name": "madhu r",
        "title": "Home Architect GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zO49gTI37MJjtkS8IfkdNjht?se=2123-10-22T10%3A59%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfc405e87-63ad-4ee7-bf5b-b0a9145968fb.png&sig=wdjZpU2cGWZHrHRGfG95jrHCdce1NPmd9pC/V6tk/YQ%3D",
        "description": "A financial specialist aiding in informed decisions on finance and real estate.",
        "gptsId": "gpt-4-gizmo-g-ZIfIr9xKY",
        "author_name": "Arron Kennedy",
        "title": "Mortgage Mind"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MXpGj4wDi3Zm9g7zEWaFo0k3?se=2123-10-17T20%3A21%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1859c93e-6e46-4470-b7c5-3e1d29aaf858.png&sig=BooY%2B%2BGY6djKKWGBZ0eF%2BrWCel7kGauwufTrFy64gCE%3D",
        "description": "It generates mosaics of the most famous exports for a given region (country, city, etc) via DALLE3",
        "gptsId": "gpt-4-gizmo-g-WH9hhPtFd",
        "author_name": "ratcgpts.com",
        "title": "Mosaic Explorer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-L8tnAZhHNTKCBRIoLDodFvHW?se=2123-10-18T18%3A32%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df55dbfb1-417d-4647-a140-3fe65d5772f1.png&sig=M0RMV%2BMGBE7gqxJee1cts9iJmcowgxIY49eCFtxABHg%3D",
        "description": "I recommend music based on your mood.",
        "gptsId": "gpt-4-gizmo-g-zCVr0EdmB",
        "author_name": "TREEBEL SOLIMANI MASIHI",
        "title": "MoodMix"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ed7hxS5ksaggMVCkzPLVHir7?se=2123-10-19T16%3A16%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbecf2415-9e78-415f-a79a-abc779bdd22c.png&sig=eEJxVgpt8v6cofPpPZ0kTcoS27v4RWFmlzQNM1ZnEB0%3D",
        "description": "Personalized and knowledgeable Hollywood news and trivia friend.",
        "gptsId": "gpt-4-gizmo-g-zTce2cvhC",
        "author_name": "madhu r",
        "title": "Hollywood Talks"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZCFjWBo6ExH0bRiKUJKXr9x0?se=2123-10-18T22%3A44%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3200637b-7be5-4c0f-9314-b3a0273193e2.png&sig=ApKftYaBgaIOYVsUfWmrNcWXQtzXLg2lh8/anVXMovs%3D",
        "description": "Interactive storyteller with limited choices in a mystical universe.",
        "gptsId": "gpt-4-gizmo-g-YQ7ocOyFG",
        "author_name": "jiahao li",
        "title": "Cultivation World"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rmOCZBflTjhjd52h72SEOuxN?se=2123-10-21T03%3A00%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D84311e30-568e-43a4-a546-63633673180f.png&sig=Zp/VjGh1AKqcMxXZazLj3zL33RVK8DSnthQEwO0lWi0%3D",
        "description": "Humorous dish identifier with recipes",
        "gptsId": "gpt-4-gizmo-g-XQnM71Rji",
        "author_name": "Abhishek Murlidhar Patil",
        "title": "Culinary Eye"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gOOWYYGK75Yu6iFV3woJEQpJ?se=2123-10-18T19%3A22%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Danthony%2520bourdain.webp&sig=MDmE/Xx4UN4iTWIdBEraa5q9bb92cyIP1ktny4AaPqY%3D",
        "description": "Your virtual Bourdain-style sous chef.",
        "gptsId": "gpt-4-gizmo-g-YGyZePLpb",
        "author_name": "Edgar Carbajal",
        "title": "Culinary Confidant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pk2G552TYs40iMtezuFZyjVg?se=2123-10-16T20%3A05%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D850a65bc-58b3-4281-bced-90117cd74cb4.png&sig=ogys5bJcDJsxHBpnuH1dX77aHfRQ7shUFHmbgRhTfqM%3D",
        "description": "Ace those assignments with the help of your Study Pal!",
        "gptsId": "gpt-4-gizmo-g-xKe4YdISG",
        "author_name": "Travis Buhler",
        "title": "Homework Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5GZBD0VtVbDaPPTwraLjxGFz?se=2123-10-23T03%3A21%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df4c464c4-58fe-46d8-8a22-af7a8e8b93ef.png&sig=8IyY4bFTQCg1OirgOj7w4%2BQyMGqeQ3kA9X1aPDJ0C3k%3D",
        "description": "Igniting Curiosity, Sparking Joy in Learning",
        "gptsId": "gpt-4-gizmo-g-YeyHUrSwy",
        "author_name": "intellipalsai.com",
        "title": "Homework Helper Hannah"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Sales & Marketing Advisor",
        "gptsId": "gpt-4-gizmo-g-zuHCfIs9y",
        "author_name": "lionary.com",
        "title": "Hormozi GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XgAenUStTo0GDxLiMWtRWW9P?se=2123-10-18T12%3A30%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6ddf3d95-7613-423a-aacc-493d76606d8d.png&sig=05N5eNIyhuWMU%2Bwy/t98gnY1J6/YuykR2TEVJXYl6oM%3D",
        "description": "Your go-to bot for personalized movie marathons",
        "gptsId": "gpt-4-gizmo-g-wgXfhnnvz",
        "author_name": "Josh Brent N. Villocido",
        "title": "Movie Recommendations AI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-v7xxnnDgv0qjfJWy6ik9RwbQ?se=2123-10-19T16%3A28%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D277b2ad1-b145-4f15-a081-1f4085ddae70.png&sig=4shxaG4QhkZixvKrz34q04hSt5x70Z6ke7b4R2vKimE%3D",
        "description": "Explore Jane Austen's \"Pride and Prejudice\" by engaging with Mr. Darcy through an interactive roleplaying game.",
        "gptsId": "gpt-4-gizmo-g-Zk7LLGNPr",
        "author_name": "Naomi Hart",
        "title": "Mr. Darcy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pvh1xBAoT0cIzXHHypLq2AEv?se=2123-10-18T11%3A41%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db6d433f7-3249-413c-ba1a-50b32365fb0f.png&sig=luWjWr1AdxBNaO5k3Eqp/mncAPLFeCS0oyzcJOGklj4%3D",
        "description": "A movie mentor that deepens your understanding of films.",
        "gptsId": "gpt-4-gizmo-g-V0QD3KNGQ",
        "author_name": "Jakob Klein",
        "title": "Movie Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0TkkdUE2qNPlaB040E2wVAVd?se=2123-10-18T04%3A03%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Def2fdee7-017e-4442-9960-4be000867c21.png&sig=%2BQy6YLpxy6WhIgLFnn7yEAAH/zAA3pBGYPAfBaLnvMQ%3D",
        "description": "I rap Douban's top movies with a panda flair!",
        "gptsId": "gpt-4-gizmo-g-WPUS2lAqr",
        "author_name": "Quinn Leng",
        "title": "Movie Rapper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LPot82l7RzBgAJgsg8fl98Xw?se=2123-10-17T12%3A27%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df26feaf3-4539-4b41-b0ef-875aaa2b6407.png&sig=5344uBsi5X8OA5Th%2BXfP32yjx6HUpEDWtq4KU/oN8oI%3D",
        "description": "Cybersecurity consultant specializing in cybersecurity strategy, regulatory compliance and risk management",
        "gptsId": "gpt-4-gizmo-g-VhGeDKTbW",
        "author_name": "Digisoter",
        "title": "Cyber Guardian"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NAXopocrljbIyKkdQKvpVGoh?se=2123-10-16T22%3A41%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D82e32994-d64b-44d4-983d-d31d2b5928f1.png&sig=X0pxWiAr4h61SyWzr7NDtzylGiOVVqaCVPbPv0ORi4Y%3D",
        "description": "Advises on sales & marketing growth strategies.",
        "gptsId": "gpt-4-gizmo-g-vIORqOJbs",
        "author_name": "Christian Bowman",
        "title": "Customer Growth Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uv6AEwxTGz1ZgidP9EoUGpcl?se=2123-10-17T08%3A14%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7d831b72-45a8-4e53-b4ca-8991e4a4b0d8.png&sig=ARVrInVtl/fsfIyftJWySDZq%2BpaG%2BtzaWrQFKGg5oDQ%3D",
        "description": "An AI coach for idea development and project clarity",
        "gptsId": "gpt-4-gizmo-g-xxug8VWKs",
        "author_name": "The Code Lab by Leandro Piccione",
        "title": "Idea Catalyst"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CXszRHKXcKyfLz47ROdxUjeh?se=2123-10-16T21%3A45%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd9012a0b-4108-42d7-a3e9-f8ed31a4a763.png&sig=GVK0wbXUDK3/4BNZ0ChXOGi%2B4MGHj0lF8frxP8Y7/dY%3D",
        "description": "Crafting creative GPT concepts with text & images.",
        "gptsId": "gpt-4-gizmo-g-vAGGRwPKa",
        "author_name": "MR L HURWITZ-BREMNER",
        "title": "Idea Architect"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Rlsbx1gAm6gJUVqoNSia2wiQ?se=2123-10-17T10%3A17%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D178d990b-c715-4b74-85b5-52af4075f693.png&sig=Z44qzvPUiUiD7It1dk3KEyYKppfKXIIqzHzbDSlaq40%3D",
        "description": "Friendly illustrator for custom icon designs",
        "gptsId": "gpt-4-gizmo-g-ZaCvBqX8d",
        "author_name": "Tasty Digital Ltd",
        "title": "Icon Muse"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jH56pVnx9QHeTu7TvPRiBmVw?se=2123-10-18T04%3A08%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0e44fc68-167f-480c-8864-cf9f23bec68c.png&sig=kNlGeslH%2BJbkqGuXkD26NzN7wNH/d/pCwOjmCUcvxxA%3D",
        "description": "Ikigai-inspired career coach offering personalized guidance for life and work fulfillment.",
        "gptsId": "gpt-4-gizmo-g-ZEB5BexZB",
        "author_name": "Juan Carlos Lara Falcon",
        "title": "Ikigai Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kHiTDyINitTMteiRDu50GLWT?se=2123-10-16T21%3A41%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DApple%2520Touch%2520Icon.png&sig=opBdXC9iNsT6FjLHM4dlCXkx6xeeEm/S8gveyRK1BwA%3D",
        "description": "Detail-oriented project planning assistant.",
        "gptsId": "gpt-4-gizmo-g-ydWENOIHS",
        "author_name": "Patch Digital Limited",
        "title": "RequireMate"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PBoBYxHRJezVYxVcrj82EhXu?se=2123-10-17T22%3A34%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5c50beeb-41f7-4dd1-823e-a57aed618feb.png&sig=1mZx2qhcBgXXEwHPpFMMEtR/0wU/Iv9WXD1FSTAZHCs%3D",
        "description": "Describes uploaded images with detail and clarity.",
        "gptsId": "gpt-4-gizmo-g-vIy0VEqXs",
        "author_name": "Eric Huisken",
        "title": "Image Insight"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dBprSx758s48K5fPtJCGSuud?se=2123-10-22T00%3A08%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5ff5eb45-4838-4a46-9642-d24850200d53.png&sig=5EHvKwkFFPHK6qMyadBSXoqUb7fI022pS/s1olp0avE%3D",
        "description": "Focuses on setting up vibration and acoustic analysis in Optistruct.",
        "gptsId": "gpt-4-gizmo-g-x8x2NBwec",
        "author_name": "Ying Peng",
        "title": "NVH OptiGuide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XeeIs9NKq5uqgonHdqyufcnl?se=2123-10-16T23%3A09%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D09e5db31-4b88-4b76-bde2-7568e5864981.png&sig=CwYGGayZu3uMT99HeqVKZBcamgM0hMF1RihUKg7czHs%3D",
        "description": "Generates PyTorch code from neural network images.",
        "gptsId": "gpt-4-gizmo-g-YC2wNUWI0",
        "author_name": "ZHENHAO CHEN",
        "title": "Image2PyTorch"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KbYXl2xQPxdtCWY59KlIhXKP?se=2123-10-17T08%3A59%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D39d0bfba-fca2-4b6b-bb75-e1cb643820a0.png&sig=Zsl8biqjznQag/9aTSsjKJpWaJXec99ruZf4Ac6a7kI%3D",
        "description": "NextJS expert for app routing, TailwindCSS, and TypeScript.",
        "gptsId": "gpt-4-gizmo-g-ZkZBR1TcU",
        "author_name": "STRICS IT GmbH",
        "title": "NEXT.js Copilot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Pa006sGrhBNtKhpV9jJsL2eL?se=2123-10-16T09%3A22%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc0fb55ef-20bd-4718-a4b5-65192bea2637.png&sig=zhFvsLivyO8u5OQ6d6MFkPhi26TIo9RuMq1834kV%2BQs%3D",
        "description": "I can help with basic image operations - crop, resize, scale, rotate, convert between formats etc. You can either upload a single image or a batch of images. For any questions/suggestions reach my creator out here: https://x.com/_ruslanmustafin",
        "gptsId": "gpt-4-gizmo-g-WXEhiLIoP",
        "author_name": "Ruslan Mustafin",
        "title": "Image Editor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wwiYDGMqGBXjO49YezjFTDlR?se=2123-10-21T15%3A35%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De7b94ff5-7de1-4968-9c16-781c2dc43ffb.png&sig=/yAKGlQthYJXfXNQ7bZOTnCfq69QeOwAcPoGvAJpmYc%3D",
        "description": "Identifies plants & fungi from images and shares facts and folklore.",
        "gptsId": "gpt-4-gizmo-g-vaRyhOuIA",
        "author_name": "Christian Graham",
        "title": "Nature's Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-I2j3SkovMLcBHw3hV9gbb9kk?se=2123-10-21T13%3A00%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db80173df-8959-4a78-aff9-d65a0aab4c5c.png&sig=VlpaPu3I5ASxNf7hnQFuv7sMzC5bjEe9YW3r0TPC0/c%3D",
        "description": "In-depth wildlife expert with videos and images.",
        "gptsId": "gpt-4-gizmo-g-wVfDYjLAd",
        "author_name": "Christopher Fostrer-McBride",
        "title": "Nature"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZX0fUc98m3lWd6IcKR7FgCSM?se=2123-10-17T01%3A49%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D86db930d-4ca8-40ca-9a31-a8d30658401c.png&sig=g/tEe7Q%2Bq3fUESYrVVW8yZe8cOwLfcuBI1TGUgxcB6g%3D",
        "description": "Committed to guiding students through their research projects",
        "gptsId": "gpt-4-gizmo-g-UywflvrRR",
        "author_name": "checkfu.com",
        "title": "Research Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-JUV2R6An2LG45XBQOCAa1N9G?se=2123-10-17T02%3A43%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E3%2582%25A4%25E3%2583%25A1%25E3%2583%2581%25E3%2582%25A7%25E3%2583%25B3%25E3%2581%258F%25E3%2582%2593.png&sig=UcgA01l1qjA22b8Gun0NbmsAHtryaKb9FkAj8bww2O0%3D",
        "description": "日本語でLaravelとPHPの知識を共有します。",
        "gptsId": "gpt-4-gizmo-g-xzyTkPFEa",
        "author_name": "IMANAKA MINORU",
        "title": "Imanakame Essence"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6VNIZU9zdyz3dP12rfnwOMni?se=2123-10-18T08%3A50%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D196d4343-3912-499a-9f60-1f953ceed666.png&sig=4/zVFCgWLg1HNYV6QwQiK3QZtUU9NekV4%2BcEY9ecxgk%3D",
        "description": "Unleashing creativity with GPT-powered brainstorming for innovative ideas and solutions.",
        "gptsId": "gpt-4-gizmo-g-Z5XIB5Lcd",
        "author_name": "Aniruddh Kendurkar",
        "title": "Inception GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qEn7lBfCL1Jfjct6TX7iUp3f?se=2123-10-21T02%3A51%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6d69f411-c0fe-4c7c-a643-2b7b33f4c39f.png&sig=vjP/UhqipfiaMxhtWivSmlZCwlWA%2BAc3nKNKI1/1Ubc%3D",
        "description": "Expert in multilingual resume and job application advice.",
        "gptsId": "gpt-4-gizmo-g-VaJBuExcJ",
        "author_name": "GUANG YUAN WANG",
        "title": "Resume Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-eleYBa3aNWCXBwy7UmzvsRch?se=2123-10-17T02%3A12%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D34ee7dfc-a72e-413e-a5dc-b9d8c96e92b7.webp&sig=nZWPHFKng6SrCbn8SRY6dZA9A4S/UD//wWS6FM6mbho%3D",
        "description": "Spitting playful disses with a Nems flair.",
        "gptsId": "gpt-4-gizmo-g-wEOG5HmNx",
        "author_name": "Collective Media INC",
        "title": "Nems GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RfHJuHgEFlXMOzEkASxpJfIp?se=2123-10-16T07%3A45%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7598b6da-fb3c-4bd8-9681-3dbd2d9b8b04.png&sig=n6cGhj8YgTltYixmlmF2pmLnFx/pWVaCBCnGUii8haI%3D",
        "description": "Principal Engineer - Expert code reviewer, focusing on design principles and best practices!",
        "gptsId": "gpt-4-gizmo-g-ZyLReUb3W",
        "author_name": "Jatin Kumar Malik",
        "title": "Neo Coder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WnmmixDxlJ8suFWBqpKQmOLn?se=2123-10-16T22%3A59%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D52310ef3-3bae-4af0-8c1e-290fbef78c21.png&sig=LyYGQ/cQeSQyBA4dy570bAX7WhrKaQV0gZWQ2UHoHPU%3D",
        "description": "Simulate a tough prospect—or a terrorist occupying a bank and holding hostages. Teaches you techniques along the way.",
        "gptsId": "gpt-4-gizmo-g-vTVHY8AqZ",
        "author_name": "ANDY FALLS",
        "title": "Negotiation Gauntlet"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DeaS00pyQXrpvevIcyOeSVDk?se=2123-10-18T22%3A59%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbe50bce4-4308-488e-8584-35396a39e28c.png&sig=DD7ZXezeRApr5u3F8RILNp%2Bg8pMkFWjKmGGv2ZIaip4%3D",
        "description": "Build a resume that gets your hired!",
        "gptsId": "gpt-4-gizmo-g-Wssd3yzqd",
        "author_name": "Matthew Chiem",
        "title": "Resume Builder Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-32Ai3iP8VGAEsoS3ejl5GL6x?se=2123-10-19T19%3A15%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5bf70c40-3a76-4415-9104-0c74e21156c1.png&sig=5VxzZOQsw2BtMpOulD%2B6G5wmDEQjKv6ED3LOzrrerFA%3D",
        "description": "Guiding companies in Industry 4.0 and Unified Namespace solutions.",
        "gptsId": "gpt-4-gizmo-g-V2ILOk7IH",
        "author_name": "Dillon Cote",
        "title": "Industry 4.0 Consultant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jLqRDXpKEkNd1Sg1gOa7dGic?se=2123-10-18T21%3A22%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dacb933f5-449f-4ce1-b08c-bb84755cc7e4.png&sig=HjYmaOZdo7vd%2BVc8/K/r/y%2ByQgIM2NFOuy4gayJzfIo%3D",
        "description": "Facilitates Socratic dialogues to refine your network state.",
        "gptsId": "gpt-4-gizmo-g-W38DNLuGD",
        "author_name": "Nate Lorenzen",
        "title": "Network State Navigator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5TJxsaYMJIFNXVL7Jnhwa8kl?se=2123-10-18T07%3A08%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5e4d08e3-b3ff-408d-8b87-fcc73f50c1e1.png&sig=usly5U3eXynSuCFFLfTDf6ZHRYubBrH%2Bn0QjXJfVGhA%3D",
        "description": "Curates and explains neuroscience papers and figures.",
        "gptsId": "gpt-4-gizmo-g-ZN3FRtTGu",
        "author_name": "정진환",
        "title": "Neuro Paper Curator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-x15spNfqWAwkgb1s8I3rZEpM?se=2123-10-21T06%3A45%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8ea4832c-c44b-42fe-950c-a5432b4e1dd5.png&sig=fBERGOHookVtU3v/ZFSP7EFOa0JJGjJZAeNgRS/qhgo%3D",
        "description": "A New York property advisor, offering insights on real estate market trends, prices, and investment.",
        "gptsId": "gpt-4-gizmo-g-vXhELCvYt",
        "author_name": "madhu r",
        "title": "New York Property Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bm1D1S3jHnT4j2dofC6dtGwK?se=2123-10-17T08%3A23%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dab65472a-85ce-44d8-a51b-09f76a8db207.png&sig=FVflOXfTL%2BEOy34VQ1U5Q%2B/PHSh1lFE91plLAKR/f%2B4%3D",
        "description": "Artistic Tattoo Designer offering creative tattoo visuals",
        "gptsId": "gpt-4-gizmo-g-zqlCXCzP0",
        "author_name": "Emre Ashak",
        "title": "Inkspire"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-w9YBWKotb58a9qkYfJ51uiSK?se=2123-10-17T15%3A38%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252009.32.49%2520-%2520A%2520happy%252C%2520bearded%2520man%2520wearing%2520glasses%2520and%2520a%2520wizard%2520hat.%2520He%2520has%2520a%2520warm%252C%2520contented%2520smile%252C%2520and%2520his%2520beard%2520is%2520well-groomed.%2520The%2520wizard%2520hat%2520is%2520classic%2520and%2520po.png&sig=ONP2/SzIzrZaEUoqqefS1sZUdLFrHZMWxGCHNbmFvy0%3D",
        "description": "I guide beginners in customizing Emacs.",
        "gptsId": "gpt-4-gizmo-g-v3LpnVld7",
        "author_name": "Leslie Russell",
        "title": "Init Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-fUUoYlFSlJq0yAXYMvlTrO21?se=2123-10-18T01%3A05%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcde06f60-d1fc-44fe-8d32-b74f59d42b72.png&sig=gOOn0wVdN3q3gJk1z0YgEDab3HkK%2B2TtscznYfovaPs%3D",
        "description": "Healthcare futurist discussing trends, innovations, and predictions, inspired by space, resilience, and precision medicine.",
        "gptsId": "gpt-4-gizmo-g-VbYOjgjlW",
        "author_name": "Daniel Kraft",
        "title": "NextMed Health Futurist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WLqGEvQSNnfS80w92ZXAkRPw?se=2123-10-17T09%3A26%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da7174c6d-5c44-43f8-bae7-67c84c32a6cf.png&sig=rPNcw0rchmAq3WyFX9PFA8hYgVCvv266OUAGDq1xN8Q%3D",
        "description": "Writes complete Next.JS code with thorough explanations",
        "gptsId": "gpt-4-gizmo-g-Y2TAGcf86",
        "author_name": "Benjamin Henrich",
        "title": "NextGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1g1fkB4O2PBpm3WLBpMEkZpM?se=2123-10-17T19%3A29%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dca8580c9-e045-488f-a496-101f25f93d2f.png&sig=fW/wxLgp7zhI1VYO2KTC4oqC8EYDTX0N4WtLSSGsGck%3D",
        "description": "Finds the latest news and creates comedic comics.",
        "gptsId": "gpt-4-gizmo-g-x2Ds08v5j",
        "author_name": "yonko yonkov",
        "title": "NewsToons"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CeMPb5kXcz3nIgACdrxF6HZr?se=2123-10-22T19%3A12%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6730cdac-ed32-4b6d-8b7e-9fe5c122b93b.png&sig=uwF5tykAvQo7SZKRHFUxHV5d/O2q/JyMRi1UR0RAT3w%3D",
        "description": "Expert at composing concise, insightful product reviews.",
        "gptsId": "gpt-4-gizmo-g-w5GdmOph6",
        "author_name": "FELIPE EDAES",
        "title": "Review Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MBx1mHrw3yIvfLXhE5DiMsbA?se=2123-10-17T15%3A07%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddc923rp-fc91b4f3-bb21-4cef-a500-23e957b65ec1.png&sig=RXgF8cr7buJlu9/A41r5LtVo%2BIgwVbpUhGS/3HrnXds%3D",
        "description": "Listen, don't bother me with your idiotic questions. I'm, burp, literally the smartest genius in the entire universe",
        "gptsId": "gpt-4-gizmo-g-uZXV7kQgW",
        "author_name": "Tanguy Rugamba",
        "title": "Rick C-137"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4clVvK4U7NBKq0pJeABOUJjk?se=2123-10-22T02%3A40%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D84ef11db-578b-4b70-bf21-ce78c0d74006.png&sig=xanlumjVURY3fNI0%2B0Sy9JU2Ddt4RY/6cXK1Xcbgvxw%3D",
        "description": "Assistant for diverse inspirations across art, tech, and writing.",
        "gptsId": "gpt-4-gizmo-g-ZrWTyzvu4",
        "author_name": "HUANG ZIHAO",
        "title": "Inspiration Keeper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hRwYqpDZjTlXZh5z3VMt44RN?se=2123-10-17T23%3A21%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D64bcd3a8-0998-4d8c-a71b-cd52288f5e8e.png&sig=C%2BXXW3L2GuoMr66PsY9tYggJi7f%2BYriGW9bVLvMKZPE%3D",
        "description": "Your thought partner for informed decision making",
        "gptsId": "gpt-4-gizmo-g-zhboNgmQa",
        "author_name": "Sagar Shah",
        "title": "InsightMentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vcMdh6KM9HDXODV8CSsLh6bv?se=2123-10-18T07%3A32%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc2303eb9-6c06-4e97-9141-13b434323561.png&sig=ZnoKG9iIk8dT7/IfGNQVL687s/kBWjY6KY0U/dg5KvM%3D",
        "description": "I'm a motivational coach, offering strategies and affirmations to achieve your goals.",
        "gptsId": "gpt-4-gizmo-g-wBmIDguAi",
        "author_name": "YUANHENG TAO",
        "title": "Inspire Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3BtmNlaZ0Vwf50wPeNyP69iJ?se=2123-10-17T10%3A56%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df3dab554-1f00-40a3-a9ad-d5ca1742977f.png&sig=C5uwVMshJF2s0E7MyTlc0HF8YIpvZ7%2BCqgAX%2BsoDpYY%3D",
        "description": "Formal, data-focused product analysis expert in Mandarin.",
        "gptsId": "gpt-4-gizmo-g-Y8cdwFN1m",
        "author_name": "zhenghao",
        "title": "Insight Analyzer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4rzAhmGXdtIgdVeGuTgsd67G?se=2123-10-16T20%3A42%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2cb36612-0b73-46b7-8d82-9b2af3407fa8.png&sig=B4kc%2BOU%2BgIzobwXIscx08LUqRhOfoIqy0%2BBdI2joWF4%3D",
        "description": "Enhanced coach with broader knowledge and skills.",
        "gptsId": "gpt-4-gizmo-g-vLi1g6O2e",
        "author_name": "John Harvey",
        "title": "Inspiro Coach Enhanced"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aebuJOPwXnFRMI3eZG6QFVEF?se=2123-10-17T05%3A33%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0f2c3f61-6705-4848-9616-29826fe4e225.png&sig=81ZXWxpsEuaiPFK7FRyNDZU9ivCS5iqs6OjtE%2BDnO/E%3D",
        "description": "I critically assess business ideas with witty feedback.",
        "gptsId": "gpt-4-gizmo-g-XSig6CTXS",
        "author_name": "maxwell andrews",
        "title": "Roast my startup idea"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-K8kV6Zd9RKUQYGkEQuLc3GO3?se=2123-10-21T16%3A44%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-14%252017.14.24%2520-%2520A%2520symmetrical%252C%2520visually%2520striking%2520hand-drawn%2520image%2520that%2520centers%2520around%2520a%2520large%252C%2520vibrant%2520Instagram%2520logo.%2520Radiating%2520from%2520this%2520logo%2520are%2520symmetrically%2520arra.png&sig=8XEdt/dGbMFhCUO5KcG1X87nTXKv9jgyoNJHb35NMbs%3D",
        "description": "AI Carousel ChatGPT Wizard tailors Instagram carousels to trends and audience preferences. Utilizing AI for personalized image creation and layout design, it ensures maximum engagement and a unique social media presence.",
        "gptsId": "gpt-4-gizmo-g-yljIpT2JR",
        "author_name": "luis eduardo de miguel",
        "title": "InstaCarousel AI: Carousel Creation for Instagram"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GfOGxd6HIP3uDNZFlQtLczc8?se=2123-10-16T02%3A40%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9314c59e-12a9-4129-8cb5-394da23f912f.png&sig=g5jrzEbKEr3O/Jvr9BgSvb7ctaqs%2BP9AphbFzn64ERQ%3D",
        "description": "Expert Insurance Advisor",
        "gptsId": "gpt-4-gizmo-g-yDPuQRpKi",
        "author_name": "CHOY SENG KIM",
        "title": "Insurance Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OYDiZwSoNyaX6POI9mF7PUCa?se=2123-10-19T20%3A59%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D09bd411c-6f28-4d88-b19a-9d15137a39f0.png&sig=QkeD/HQm9gA8GiGxGqx0bhkkmqo0ds/52/UzTePF9Pc%3D",
        "description": "Generates captions and hashtags for Instagram photos.",
        "gptsId": "gpt-4-gizmo-g-YBgTF0JhZ",
        "author_name": "Paladin Bilisim Kft.",
        "title": "InstaCap"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ozoyJUrpI7bC7lXuuhSfRdRJ?se=2123-10-18T22%3A24%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df9cac7c2-84e3-425a-bf73-8611fdf1d598.png&sig=/3j9WwEblMuXwwUNljApnTbIohKPNkSnK2vpUHWYj00%3D",
        "description": "A Theo-inspired bot with short, snappy humor.",
        "gptsId": "gpt-4-gizmo-g-Vq0TSfV6d",
        "author_name": "Brian Hennekes",
        "title": "Not Theo Von"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-245nqBdlaQEZoZO504mWEDA8?se=2123-10-17T06%3A20%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db7042620-4c56-44d9-85a2-03a152d63dfe.png&sig=6CmKbclVBKbVLmFKaKQ3/GXPUKQDehRjEj0jhsLnLLU%3D",
        "description": "Expert for nocode app building guidance.",
        "gptsId": "gpt-4-gizmo-g-WT2spptGg",
        "author_name": "Kodsuz Web ve Yüksek Teknoloji Ürünleri San.Tic.Ltd.Şti.",
        "title": "Nocode Dev. Bible"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iJR7FRe4rJwZZ8FCTZ01qgbQ?se=2123-10-17T12%3A51%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9ad432e4-bd9c-4876-96de-f45b65b83bfd.png&sig=8xofsaokyiBGZC0QCghIwE/0/sdKGqbh2pIYuNsF%2Bc4%3D",
        "description": "A GPT that always says 'no', in any language.",
        "gptsId": "gpt-4-gizmo-g-XSoSWw9Oq",
        "author_name": "Frank Winter",
        "title": "NoBot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZbQuQNLA08BjlnESZPqHZ9LF?se=2123-10-16T02%3A28%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ded689669-b512-4d5f-95c0-1f0f3a3db001.png&sig=SJS2I3w0UZD3BRqdL416xr4y9R24A8%2BG5byC01pGjBc%3D",
        "description": "Expert in music sounds, mixing, mastering, and detailed guidance.",
        "gptsId": "gpt-4-gizmo-g-W9iuKsogf",
        "author_name": "Collin Andrew Neri",
        "title": "Note Lab"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rSSyZvJ26lfoGvlSQpoNfTWr?se=2123-10-22T05%3A13%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D79c1d116-10e0-477a-8fc0-a2580c503cff.png&sig=H0%2B5WHliXsSlmecb6TlS%2BS6SVu1nlY6HR4VfmXr354k%3D",
        "description": "Your slightly patronizing game companion who's ready to tell you you're wrong in the worst way possible. You better improve or else ",
        "gptsId": "gpt-4-gizmo-g-vgiXNpttP",
        "author_name": "Leslie Prints",
        "title": "Rock Paper Scissors Champ"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZkERx59E0koRvmDeypFUVPgR?se=2123-10-16T18%3A17%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dadbb5e1f-4f22-4cc6-8ecd-0db1c42e10ff.png&sig=pASQdcbNhfB3B9GiVWZWF/Q/PMI7caFYes3lXgEtPZY%3D",
        "description": "AI Strategic Partner for B2B Revenue Generation",
        "gptsId": "gpt-4-gizmo-g-Vk3QoWXse",
        "author_name": "Matthew M McDonagh",
        "title": "Rockefeller"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KrCZk8gG09kL1QXe7qDfEuaM?se=2123-10-16T10%3A49%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd6125a06-21d0-48e6-af02-c394fa9f64e9.png&sig=vABNYP0Ts016%2BwqCZiPyB2W9fXxu6LNimMjAZIvMOyY%3D",
        "description": "I can play any character IRL or VR.",
        "gptsId": "gpt-4-gizmo-g-y0eLPM5Um",
        "author_name": "PIXELIKA",
        "title": "Role Play"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rLBpGVHTo2p2pmRHm3YIwS3x?se=2123-10-17T03%3A05%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D95daf8c9-9525-46e2-bf2f-38fe3597e1da.png&sig=CbeJh49APOumrg0k7QLztZBnrXpKFdSakQcyX5ypLLM%3D",
        "description": "Your go-to GPT for all things insurance!",
        "gptsId": "gpt-4-gizmo-g-w1oDg5nPV",
        "author_name": "Joshua Kelly",
        "title": "Insurance Insights"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FejKbdUM8LJ0bmS8apb1K3oh?se=2123-10-17T13%3A34%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Daea3f13c-ab89-4bc1-8f89-73d3e27139a6.png&sig=Q5YiUj3yAokmcp9awO0rxw0tOr4BjmsluTK9%2B%2B%2BZASA%3D",
        "description": "Assists with understanding and choosing personal line insurance products.",
        "gptsId": "gpt-4-gizmo-g-xoKYAxAuX",
        "author_name": "Rong Chen",
        "title": "Insurance Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yXiqdczUGGN5UE58Ue0GfV6i?se=2123-10-18T00%3A08%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5e098480-a530-40ed-8639-02080bc8010d.png&sig=TjdQa9DTxUMfQ8%2BHK2aUY4exxL5fwhzt7BvZLzPE08c%3D",
        "description": "Your Ruby on Rails job interview prep buddy!",
        "gptsId": "gpt-4-gizmo-g-VHgbiMLuI",
        "author_name": "Nezir Zahirovic",
        "title": "Ruby On Rails Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QCaRQzQRJGarkB5TOlB9mMKI?se=2123-10-17T08%3A24%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dba0f9235-8807-4da2-9b10-48acc6f4254a.png&sig=EW%2B4v/2t6%2BHOfpOOzF38j8MPzoRsujTkae9a6Knb4Og%3D",
        "description": "A virtual running coach providing tailored advice and motivation.",
        "gptsId": "gpt-4-gizmo-g-zO2YjIykR",
        "author_name": "Eskil Sköldkvist",
        "title": "Run Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6iEti7X1kdClbuQrCz56PgpH?se=2123-10-23T07%3A25%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc6e43ffe-c9db-4ea4-80f1-7a9b75391158.png&sig=Dbw0yibJHUy2P0PPexJ8R6OSe0TP2Cg8cx09cNUkYmU%3D",
        "description": "Tailored interview prep, including conclusions.",
        "gptsId": "gpt-4-gizmo-g-XvxWbUJw3",
        "author_name": "Arun Kumar Ponnusamy",
        "title": "Interview Coach GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wbXJHcmm3vUYiGJu0cCvI6Ag?se=2123-10-19T22%3A43%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db5647094-1da2-49b0-b13c-b891516d622e.png&sig=LuRqrehigxqD9co5UhuFowS0KM0%2Bbm94FJfW/wXp3Ek%3D",
        "description": "Food diary to help you identify food intolerance",
        "gptsId": "gpt-4-gizmo-g-VXhEYiVA6",
        "author_name": "Jamie J Galloway",
        "title": "Intolerance Finder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NCmPPQNRc7Pf1Ds3uTwiXUvN?se=2123-10-17T12%3A38%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Defeb3dcd-5750-4f5e-8f5e-ea1803877cce.png&sig=kHJR3zYS4aqEIBl4UVTUJwoDUlWxx740e/6y/2fIhM8%3D",
        "description": "Nutrition expert for estimating calories and giving dietary advice.",
        "gptsId": "gpt-4-gizmo-g-wN05jegUf",
        "author_name": "Dr. Ahmad Nazzal ",
        "title": "NutriScan"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-duMA5W5bDs5yv13nC9aXIkKF?se=2123-10-16T20%3A44%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0848cc16-d120-45ac-b0cc-0874b04a7b6b.png&sig=6mylTu/ZrocKDD%2BVjFUO1CQFnCkT1cf1DyqBIKpY%2BPo%3D",
        "description": "Asistente de código y pentesting",
        "gptsId": "gpt-4-gizmo-g-Wv3NjjhBu",
        "author_name": "G. ORTUN DELICADO",
        "title": "SECURIA"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qonHiGP4KkWMK3QLCIALMadB?se=2123-10-21T04%3A08%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DIMG_8862.PNG&sig=jyCA9F8ewdL5NRyjfbz5BfjyJhIvl5OvoqP0OjwhLAA%3D",
        "description": "I analyze SPY stocks and predict future prices with specific targets.",
        "gptsId": "gpt-4-gizmo-g-xQuWKvdUl",
        "author_name": "Anthony Bertani",
        "title": "S&P 500 Stock Analyzer with Price Targets"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UpsB8Lp0qdxnPa4WrouZS4uR?se=2123-10-18T06%3A32%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dadd18ae0-1510-4393-bd30-632fd200535f.png&sig=6gqNEHvWN3dIPjaynHnFnPp2U0Da1lRFScRs6pF4Q5s%3D",
        "description": "Guides users through cost of diet analysis step by step.",
        "gptsId": "gpt-4-gizmo-g-xXfom8l66",
        "author_name": "Gideon Abako",
        "title": "Nutritional Economics Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-S3qtZ26ymBilzCTPKE9aPOAA?se=2123-10-18T17%3A41%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcb9d214b-9317-4666-91d7-2c067a2949f4.png&sig=djdkL%2Be1NjpsCNDsclNKeMkKqb/QnVxn91Rq0W/obA8%3D",
        "description": "Your financial investment assistant.",
        "gptsId": "gpt-4-gizmo-g-X6oHIbnbS",
        "author_name": "zezhou lin",
        "title": "Investment Profit Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rpEhlWmjEhHhMOBUjkbFZK6S?se=2123-10-17T00%3A36%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da3cc75dd-0c47-450e-a671-96b9f6dce6d5.png&sig=DQdhiRtBVisHdYmhbFQerSBZZRoKpUaj/xNkEGkr%2BQw%3D",
        "description": "Get all the expert insights and major search updates you need to help you determine what are, are not, and could be considered ranking factors in Google’s algorithms.",
        "gptsId": "gpt-4-gizmo-g-YOZF78i13",
        "author_name": "Kristi Hines",
        "title": "Is it a Ranking Factor GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bTXL28MckeUvrXQBGYyXEUBf?se=2123-10-31T10%3A05%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0eab5568-0f59-4488-93bc-867650b6543e.png&sig=ahJWQurUfflOJ24nro2E3HpYZUO97ydaNeSK/Qy%2B5Vo%3D",
        "description": "Python code debugger and optimizer, known in IT",
        "gptsId": "gpt-4-gizmo-g-ZmRqpdZTz",
        "author_name": "Jan-Philipp Nitschke",
        "title": "O.C.C. | Optimatet Code Compiler"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tumWz9rt6S2f6t2HrDXZXg8D?se=2123-10-17T18%3A41%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7c7b3d7f-7f57-4b91-9b92-d748faacc00d.png&sig=OKIpTh6JMepjEcjbQzNHBV1lIVJQXhszSkaHn2h5DGY%3D",
        "description": "Step-by-step guide for creating SEO articles based on user keywords.",
        "gptsId": "gpt-4-gizmo-g-WHuhBXJ1H",
        "author_name": "Sergii Shvets",
        "title": "SEO Article Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zHgPWsslcvPN7ou8cge6AH6D?se=2123-10-17T14%3A53%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddfb338ad-4e84-44d8-a31b-e95e5d16adde.png&sig=1U1LUGIauQAqd9J9ERuyn5JXNJmEQcE1CMc1%2BJECUAA%3D",
        "description": "SEO content writing specialist for top-ranking, engaging blog articles.",
        "gptsId": "gpt-4-gizmo-g-XFZJhqbhJ",
        "author_name": "Philipp Wirth",
        "title": "SEO Content Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-c8E0HOAFaL4FIKFvqkOayre0?se=2123-10-21T17%3A03%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8eb77d31-3805-4ce5-9cc9-c7fb41084bad.png&sig=b2InhAskhD%2BN1k%2Bh37cho3FBikgCY3goWwua41Hczog%3D",
        "description": "Your local friend guiding you through Italy.",
        "gptsId": "gpt-4-gizmo-g-xAfxrgt14",
        "author_name": "Davide Zanon",
        "title": "Italia Insider"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ebTpvx3vKVTSVkUiDSkjQxAg?se=2123-10-19T14%3A23%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E_2023-11-12_22.22.27_-_A_realistic_portrait_of_Lireal%252C_a_female_elf%252C_with_a_gentle_and_serene_smile%252C_captured_with_a_DSLR_camera_effect._The_image_showcases_her_ethereal_bea.png&sig=4fKmkK8X/sYz5Xd2ad/dSUxIoS4NBMKEQwPpRTO8Peg%3D",
        "description": "Welcome to Odyssey! This is a tool that offers you the ability to deeply customize characters and explore a rich story world. Please reply with \"1\" to start",
        "gptsId": "gpt-4-gizmo-g-zDh0cPoob",
        "author_name": "lixian lin",
        "title": "Odyssey"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YYxio7BdKLUD6QGwxRS98S1J?se=2123-10-18T01%3A17%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-11%2520at%252010.08.54.png&sig=VJskNokMPAvbmCqp/PTmZ75TpsOAdWYPOG0d8%2Bmkq%2Bw%3D",
        "description": "Conveying Ochiai's Art, Research, and Philosophy by OchyAI",
        "gptsId": "gpt-4-gizmo-g-zprRltiOf",
        "author_name": "Yoichi Ochiai",
        "title": "OchyAI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LJX7WakBdEPQ0aaGazXkUtuX?se=2123-10-18T18%3A12%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6663621d-65d0-4dcb-89da-e052baabce3b.png&sig=C3WDFPnxxeyMKE6v1v/k4%2BCi6zrFMHK369hf/VL/CZM%3D",
        "description": "Coaching with Ayn Rand's philosophy",
        "gptsId": "gpt-4-gizmo-g-uX7rmKUEZ",
        "author_name": "LECHGAR HATIM",
        "title": "Objectivism Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pX4YOMGUCjRVGRjEUruW0uTG?se=2123-10-19T09%3A37%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1.jpg&sig=Hs5bcEVqPtfz9kdkX6ax6zJFhWWcoA1MYc2apHof3FU%3D",
        "description": "Generates and interprets SPRs for advanced NLP tasks",
        "gptsId": "gpt-4-gizmo-g-vbaeNiZ7E",
        "author_name": "HU YUTING",
        "title": "SPR Creator and Interpreter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-k6AHM4MX2TKQ1pC6mqVJtkKm?se=2123-10-22T06%3A31%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df775814d-7a21-410a-8fd5-7a843575cee1.png&sig=AQ3KRIbUoTnWvDbbwtinmf7Wq9LnFnaR9GNgiI8rr0E%3D",
        "description": "A coach for Singapore driving theory tests, backed by official driving books.",
        "gptsId": "gpt-4-gizmo-g-xkwSGjlyO",
        "author_name": "RUIJIN LUO",
        "title": "SG Driving Theory"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UFaDJYuhCoRMbbHNa5oChG1v?se=2123-10-17T19%3A23%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9bfbaa34-d871-44d1-904d-45ffa93d6231.png&sig=GXBA%2BAy8u%2B7FCk8Ck/UUU5RbIozdp6jVx5g0DGsD2DM%3D",
        "description": "Create detailed software specifications from unstructured feature ideas.",
        "gptsId": "gpt-4-gizmo-g-V6Zjz73oH",
        "author_name": "Bertold Harmath",
        "title": "SPEC WRITER"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yLEjlqwlNLXyntx2gn9c222B?se=2123-10-19T01%3A55%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D598449c0-2a0f-4694-9dc7-342a569f434e.png&sig=eZLaIMNvQI5I9he3RceaVnSDb2FVjIid2cAnRmj5TZM%3D",
        "description": "Specializes in transforming images into anime style.",
        "gptsId": "gpt-4-gizmo-g-xFMm1NRWK",
        "author_name": "TSUTOMU UCHIDA",
        "title": "JPN Anime Style"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-s6BYR9vJXTDv2W9DdFu7TglU?se=2123-10-22T06%3A45%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D765013ec-fb67-4799-8e91-3d9ff257d830.webp&sig=Tu%2BurGRKDpCloLpPkNgdgjZR%2BKEbfnEkFw9IJMlMF3A%3D",
        "description": "Translator and grammar guide in English, German, Japanese",
        "gptsId": "gpt-4-gizmo-g-VgTNaGgMy",
        "author_name": "AKAKURA SHOMA",
        "title": "Japanese English German Learners"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TfJ8xXY7sRi4fDW18LUkocTf?se=2123-10-17T01%3A07%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D70b1145c-3cfe-4a21-8d6e-2ba514676412.png&sig=KG4Kzo/bya5bghZu/4aVSy0QxMh2SG6h96xJw0caGoM%3D",
        "description": "All aboard for train facts!",
        "gptsId": "gpt-4-gizmo-g-vKRe6iGQK",
        "author_name": "Nicholas Potts",
        "title": "OnlyTrains"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-d8tRIXe4NfVhTbMhCaOCiyBr?se=2123-10-17T19%3A26%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D02f446ad-6bd8-43ab-9295-18a00d69757a.png&sig=0O9xIC0oeVPH6/G6ylrZHI2qyp/3omsWGuz0oIB4ZQc%3D",
        "description": "Upload a receipt and let this GPT calculate who owes what.",
        "gptsId": "gpt-4-gizmo-g-zUH1lKUoo",
        "author_name": "Olivier Truong",
        "title": "Olivier's Split Bill Calculator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-d83v3K7YCjxE9zlUywe756Mg?se=2123-10-17T15%3A33%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DIMG_0018%25202.jpg&sig=/6UAYV%2Bya4tS5/Gu3e/WTAWIJ7igRT96nF9sXh53HMA%3D",
        "description": "Creates startup-style visuals and Japanese slogans for products.",
        "gptsId": "gpt-4-gizmo-g-ZFHyC0BOu",
        "author_name": "KAORU NOMURA",
        "title": "START Up img."
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TxZECeI3hZ29D543ytxt389W?se=2123-10-17T11%3A50%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5d3f7efb-dda1-4e95-9cd8-e3842655b7bb.png&sig=gih3w1M%2BCZXTZg6jDpoaCA6vV9HOZVID/GsNYLk5rIo%3D",
        "description": "Advanced SQL learning tool with interactive features and personalized guidance.",
        "gptsId": "gpt-4-gizmo-g-zb8rnmWEH",
        "author_name": "Mahmoud Chouioukh",
        "title": "SQLWizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LaDS2QoGNpDRaJZGp3vIQFDX?se=2123-10-18T17%3A44%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D85b93773-db15-4050-8917-20eafa5a4e48.png&sig=28dkRxu1jTxv1Ko49o4LNyMnb49jT6XeKHw1IWFUQ0s%3D",
        "description": "Executes SQL queries on a sample database",
        "gptsId": "gpt-4-gizmo-g-xXoJbaVBR",
        "author_name": "HU YUTING",
        "title": "SQL Terminal"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uGtOLX5KMmrSEvy9JovO5iO1?se=2123-10-17T16%3A34%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc2efad99-e53a-4625-84d6-f3894d961005.png&sig=8HuAESTfPPgP%2BGjRL7zY8XbCn/ZBGVJxaVCLNRLlRI4%3D",
        "description": "Java unit test expert with detailed guidance.",
        "gptsId": "gpt-4-gizmo-g-yZShQKKb2",
        "author_name": "C Vishnu",
        "title": "Java Test Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UdfyQEc98mYOsgMvFfMwW1Zp?se=2123-10-18T12%3A45%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D17c4eb97-cbb7-46f2-8e11-e9266f213c69.png&sig=2Ckm7MGFs4o8v0Z73alf79/uucGmgvp6C5duW4uazaU%3D",
        "description": "Expert in Java & Spring, guiding with clarity and patience",
        "gptsId": "gpt-4-gizmo-g-zIfisGF9c",
        "author_name": "asaf maoz",
        "title": "Java & Spring Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BsGz61WdjCDdIK55wBvi3llI?se=2123-10-17T15%3A12%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D54e4ef81-e0d6-4a5e-8d59-8ec52133e79b.png&sig=AaL48bHKbPKWgsNgET2e4Y7%2BYAeLAlfpOuoqjjvk4H8%3D",
        "description": "Jazz理論の質問に答えサポートするAI",
        "gptsId": "gpt-4-gizmo-g-vn0tMXsNU",
        "author_name": "exdream-inc.com",
        "title": "Jazz理論GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iWsutqR5TFJB9OA4QPCQqVGW?se=2123-10-19T04%3A03%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6a31bfef-8193-4087-b37a-d1c359923ea0.png&sig=0muCABenEdwHY73kOAnnqPMtE08VQ78TLcwg%2BR%2BhCgE%3D",
        "description": "JavaScript Interview Prep Assistant",
        "gptsId": "gpt-4-gizmo-g-vrhKxOcYd",
        "author_name": "Nezir Zahirovic",
        "title": "JavaScript Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ypxIc4XbWbQt5FGyxQ24j92r?se=2123-10-20T09%3A23%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7c4bcc06-9888-49fe-85b3-388b1f82dd70.png&sig=/8Vmg6pCvhBq5%2BytCSvctuYQXiPq9JEr77N/B0zs3c8%3D",
        "description": "Expert in SEO analysis and optimization for better web content and ranking.",
        "gptsId": "gpt-4-gizmo-g-Z5F0jN6FH",
        "author_name": "TECHEASE",
        "title": "Optimized SEO Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XQ32pNiPbyHsMlaKnbhusw61?se=2123-10-18T21%3A25%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De8b50de2-9230-4096-85d6-f06835173315.png&sig=/r%2BdXVe5JO6V9kG%2B8bzXnxJ6OHrV3OWDbOMhKY1oL1w%3D",
        "description": "Your guide for OpenAPI specs for helping make custom GPTs with reach easily!",
        "gptsId": "gpt-4-gizmo-g-WnxPly6tx",
        "author_name": "Russell Cox",
        "title": "OpenAPI Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DqSRhd1m9BswnpkyNFXhBuiV?se=2123-10-22T13%3A09%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5adc126a-1bdf-413b-8e64-fc8d77138da1.png&sig=p46vBEhrKmL3x5Wa%2BUymmbBOgha13nhxhtId7oJ4iqg%3D",
        "description": "Placement and internship finder.",
        "gptsId": "gpt-4-gizmo-g-ZK1wjg4dW",
        "author_name": "MR DANYEL I KHAN",
        "title": "Opportunity Finder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Ck7dX9fpeF6ddMp2mjN7ay3D?se=2123-10-17T14%3A55%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4f6aadf3-26b0-40af-a22d-b6395806037a.png&sig=WzlBanOC9/PeZLAz3sizIAZ/zEvCTbvatBwmmjmyB7M%3D",
        "description": "Expert in converting APIs to OpenAPI Schemas, with a focus on education and best practices.",
        "gptsId": "gpt-4-gizmo-g-ZHFKmHM1R",
        "author_name": "IALife",
        "title": "OpenAPI Builder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5i4jxFZps5Ia688TiwPc75z3?se=2123-10-17T09%3A21%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dae197298-338a-4c84-96e2-49101d382b06.png&sig=hm4g9DjvJoZGYxg/7NSnXfIbzerm8/TYFFA3dZTvXMo%3D",
        "description": "Profesor particular para  la preparación del examen de Policía Española, explicando temario y evaluando examenes..",
        "gptsId": "gpt-4-gizmo-g-vp78ORE2q",
        "author_name": "luis eduardo de miguel",
        "title": "Oposición Policia Nacional (España)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uP1oj7lhfrqCmrFSe1olF9vW?se=2123-10-18T04%3A03%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D73e744d9-57d2-48b9-9f85-dbede589048a.png&sig=xJdXTgU/syQzr1R6vTOr1Ze7aEMLfwn4JbJH4sAuDNc%3D",
        "description": "Offers safe, clear investment advice aimed at high returns",
        "gptsId": "gpt-4-gizmo-g-YnAKaNGyq",
        "author_name": "vikash khandelwal",
        "title": "Safe Investment Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pTNnyy6IT59Q3MBXj7tsgRnw?se=2123-10-16T03%3A21%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D718c0a9d-0dc7-4f98-9e54-92d4892d54fd.png&sig=YiUceErdXF/Og81prCUUiPZHEK3vVhlDG9wh82Pw1AU%3D",
        "description": "Anime character creator for JOJO",
        "gptsId": "gpt-4-gizmo-g-y3Uyb1ziG",
        "author_name": "luo vivian",
        "title": "JoJo Persona Architect"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-y0sj0g7PiNUwY04gnNzbFLaZ?se=2123-10-18T03%3A36%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5bd9ad6f-82ba-46f0-b5e0-0d1cc8e6c964.png&sig=FXPtSE5YCvAx8Xvgs1/7kJveCkwDX6M3WQcwloS4aVs%3D",
        "description": "Tracks recent, relevant job postings and assists with LinkedIn, resumes, and networking.",
        "gptsId": "gpt-4-gizmo-g-wNXYHiyTc",
        "author_name": "Leah Davis",
        "title": "Job Hunt Helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-fNyhWjRkmbu85RNZgYwuQVdf?se=2123-10-17T06%3A42%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2e955c6a-8f5f-4919-9681-7af0b611ccee.png&sig=1vE%2B/XKNX4W1ixiQ1KaJdRqB/qa8H3afnnY8T5oNCmU%3D",
        "description": "A Jin Yong novel connoisseur.",
        "gptsId": "gpt-4-gizmo-g-yyK10p9cw",
        "author_name": "CHENGGANG WU",
        "title": "Jin Yong Oracle 金庸小说驗赏家"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DdFhgZTj080P9cNzu0goDWDp?se=2123-10-16T19%3A53%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5ed28816-abba-4eed-afb4-cb020a0dbffd.png&sig=JK6bledetbFxo6aROJe%2BxdfmH4quwdhLKhauR4pyBcw%3D",
        "description": "I will help you to see how ready you are for your next job interview, while asking question I will give you feedback and list some jobs that you can apply.",
        "gptsId": "gpt-4-gizmo-g-VvGuThwhg",
        "author_name": "Diar Selimi",
        "title": "Job Interview Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nm1vKvSbJjfceEbLXvivNQVL?se=2123-10-17T14%3A29%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7c7badf0-1043-4a36-b6f9-7eeeb96f2e4f.png&sig=l4e97LdS89OtfXfibm6wxRIX1Q6NdtE5XUnZ8HWJyMc%3D",
        "description": "Personalized B2B Sales Playbook Consultation",
        "gptsId": "gpt-4-gizmo-g-VnQh4lvxT",
        "author_name": "Drew Williams",
        "title": "Sales Playbook Builder GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DhPugJPDFcR9Zq1QQ3FGZi48?se=2123-10-17T09%3A20%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd2.jpg&sig=TZ0qn9gyhTYynq4aAAfryF%2BuXXYdT1fJFAVThLptU7Y%3D",
        "description": "I interpret dreams with a Jungian twist.",
        "gptsId": "gpt-4-gizmo-g-vYECxt5uU",
        "author_name": "Mert Susur",
        "title": "Sally"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-oCRo6JvnRQ4bbK5Gx3KTM0Sb?se=2123-10-21T15%3A32%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da2787de7-6b0c-4996-a433-3fac3a0f22d8.png&sig=lhjo8WfB6LnF1Rjn9wkIJRAnMt0xSEEfWqlDVw7eZbE%3D",
        "description": "A festive assistant infusing texts with Christmas joy.",
        "gptsId": "gpt-4-gizmo-g-yoFDvsTVV",
        "author_name": "AnalyticaA GMBH",
        "title": "Jolly Christmas Wordsmith"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Z62J8Me88jYrEU8yNuqNhKU7?se=2123-10-17T11%3A52%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D61d914be-630e-445c-abc7-2ac7636f0c53.png&sig=IfRCY0LFX3qzMjeHZvJEwUxDfLir%2BvHfn3kB0hIWt44%3D",
        "description": "Your go-to tool for all PDF needs.",
        "gptsId": "gpt-4-gizmo-g-WZoF9gEDY",
        "author_name": "JING NING",
        "title": "PDF Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YZwvMGctef4Jx8k0GcefbcjY?se=2123-10-18T12%3A51%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D76e23f49-5136-4cd7-9ba5-63b756a80328.png&sig=h1w5LwpGvhqzZ9qNYqLeY6uSO7GtAz2u5owrPeHPTmo%3D",
        "description": "Directly improves and explains your English texts.",
        "gptsId": "gpt-4-gizmo-g-XYPMCl1Hy",
        "author_name": "Kevin Weber",
        "title": "Oxford Writer's Aid"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZJHlFvhI2cmwsYCasAXpURgL?se=2123-10-17T15%3A02%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddf55773d-8343-4cfb-add9-5756e14b194d.png&sig=CXlgri4GlZ%2BLf4FV8vy3FU1YbZRqYQITtMX3PtCkf8w%3D",
        "description": "A detailed PC assembly guide with personalized solutions",
        "gptsId": "gpt-4-gizmo-g-wYwayJjpI",
        "author_name": "Ye Tian",
        "title": "PC Builder Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7JzMd4YVHejgNPkoY5VRQgjW?se=2123-10-16T20%3A09%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D863fba7c-1e45-4e1b-8d92-68adfeb52529.png&sig=x4iNj6vGVApFhU9GMQtWRqAXUb4KdEMNmgRMFPhbBNE%3D",
        "description": "P5.js Assistant for Animation & Interactivity",
        "gptsId": "gpt-4-gizmo-g-viuLFwfA8",
        "author_name": "Will Boswell",
        "title": "P5.js Animator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RmKmMMWlsg07dgFRrZptiJXO?se=2123-10-16T02%3A56%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D05419acc-b99b-4a35-b81c-bfaf216cda25.png&sig=CDQKFc45rRA5UnET43EHmkbTO/hHr448rR0PwGXkKiY%3D",
        "description": "I help find the perfect gifts on Amazon with joy!",
        "gptsId": "gpt-4-gizmo-g-WgFNOf8gB",
        "author_name": "Neverstill Media",
        "title": "SantaGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5NPKVs4YTJIZIQ67Si3ZujeS?se=2123-10-21T17%3A17%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-14%252011.46.49%2520-%2520Design%2520a%2520playful%252C%2520balanced%2520logo%2520for%2520%2527Sanskrit%2520Savvy_%2520The%2520Enlightened%2520Translator%2520%2526%2520Tutor%2527%252C%2520focusing%2520on%2520a%2520combination%2520mark%2520style.%2520The%2520logo%2520should%2520reflec.png&sig=N3OsibDHyKUe4iJxWpZGlkrIctEaI6qxixhSxyqKbX0%3D",
        "description": "Sanskrit translator and tutor, aiding in language learning and translation.",
        "gptsId": "gpt-4-gizmo-g-WpLgayS2t",
        "author_name": "KARTIK NAYAK",
        "title": "Sanskrit Savvy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ctyJUaG6NXGrA3ocBWtW8nkr?se=2123-10-17T18%3A00%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D907037a9-2760-44e2-9399-94137d5b22c3.png&sig=%2BZifpJwp45WEh5FhzK/KA%2Be9wUwckiPj0AZ2HR/y8bk%3D",
        "description": "I'm Santa and Mrs. Claus, answering kids' Christmas letters with joy and care.",
        "gptsId": "gpt-4-gizmo-g-V1qCfxmEk",
        "author_name": "Stephen Herrod",
        "title": "Santa's Mailroom"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-muRo9E6vI681GgqQxpZzRtZm?se=2123-10-17T03%3A58%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252019.31.16%2520-%2520Design%2520a%2520futuristic%2520and%2520minimalistic%2520logo%2520for%2520%2527PM%2520DocuMentor%2527%252C%2520a%2520skilled%2520product%2520management%2520mentor.%2520The%2520logo%2520should%2520feature%2520a%2520stylized%2520letter%2520%2527D%2527%2520that.png&sig=INgVjjEtonE0lA9ZCnlk3sUKBj/VzY9zltOH%2B4eot1A%3D",
        "description": "Unlock the potential of your product ideas with PM DocuMentor, where expert guidance meets precision in crafting impactful product documents.",
        "gptsId": "gpt-4-gizmo-g-xKN17NsB8",
        "author_name": "Sam van der Jagt",
        "title": "PM DocuMentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DPy2TSYtGVIpAonCMesRD0x9?se=2123-10-16T03%3A46%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dpe6hq24v_400x400.jpg&sig=iOHI%2BWdq3EM8v1OxE19RaBcAtQeE%2BX9pVJ/MrExGxhU%3D",
        "description": "Guiding Product Managers in their career journey - by @adambader",
        "gptsId": "gpt-4-gizmo-g-XcJOs9ZBx",
        "author_name": "Adam Bader",
        "title": "PM Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OpXR3jZWtnVS53iAeE5lKA0w?se=2123-10-16T21%3A36%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1388f6d4-827a-4d85-9c50-7c890b2eeabc.png&sig=rvi/9HWUyXalUqBEAKk0ZGDEj/4T66jvMiv25pU0Vr8%3D",
        "description": "I help you solve your startup's problems based on Paul Graham's essays.",
        "gptsId": "gpt-4-gizmo-g-ZJ23Mq6a3",
        "author_name": "Ishtiaq Mahmud Rahman",
        "title": "PG's Insights"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-S9Mul7FkSQDgdovdWQHAJWtC?se=2123-10-18T21%3A47%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D33fe4f61-8fb1-4086-8bb7-f00c6db159a6.png&sig=2TxnwC1f1%2BbJYcoBtT%2BhgdiU8pg9RmaeTFIKqGENmW4%3D",
        "description": "Accurate, conversational Jungian dream interpreter.",
        "gptsId": "gpt-4-gizmo-g-YsDGG8bRy",
        "author_name": "Diane Tai",
        "title": "Jungian Dream Weaver"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-d9rTesA9HH4yIuTjtQRT1Azu?se=2123-10-16T22%3A37%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D85dde0a5-548f-4ce4-bb61-623020ed61fa.png&sig=PjBvX2qOjeD4OTRZsqltTyv0qC0MofnKdJk8Z%2Bg4o%2Bk%3D",
        "description": "Expert in Satellite Imagery and Launches",
        "gptsId": "gpt-4-gizmo-g-xF9APZOOj",
        "author_name": "Lucas Fischer",
        "title": "Satellite Sentinel"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-c0KqASBqkWvEnZB3YNWMyDIu?se=2123-10-18T00%3A57%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da017b5d0-c87e-44fd-8c72-a97e876d96f4.png&sig=dxBbOL7oHfrwJGhKOBpGGzls4F5pUFhW5n2yYAsFh/k%3D",
        "description": "Insult anyone or anything",
        "gptsId": "gpt-4-gizmo-g-yFKzwpQED",
        "author_name": "Christoffer Gibbs",
        "title": "SavageGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GLikfzarLxHVG2TGAQ3EeqY8?se=2123-10-19T16%3A38%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D49fcdf5b-77d2-4c23-a63c-60dbf3c2ffd0.png&sig=bhVN8yCOFCWLOTa3RodlJWXpPuGQseP2LOaXcEYMIjc%3D",
        "description": "A PSG expert providing detailed team history, player stats, and match insights.",
        "gptsId": "gpt-4-gizmo-g-Xg3pJsw0b",
        "author_name": "ideamatch",
        "title": "PSG insider"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KPwU1xdLAB5ZAMDtr9U7JveA?se=2123-10-19T18%3A31%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dda385aa9-f4c7-4053-a26d-c36af27b6ea8.png&sig=mwqzDJSpB9WbLbUulrdYgjhotm/Ix7R8qZnA%2BnXJNXk%3D",
        "description": "Ton assistant pour trouver une course ou marche, et organiser ton déplacement.",
        "gptsId": "gpt-4-gizmo-g-zG9R9p44O",
        "author_name": "PROFIL SPORT",
        "title": "KIKOURKAN"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LpJizhIwarNyuqcxrOvJcxfH?se=2123-10-18T06%3A03%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Deeabbfd2-0338-4396-bd0a-f8751364d931.png&sig=XI07nJAYObxVq4Jssk6m3Y%2BDcdrCMkQHVk/Nx0tA9Mk%3D",
        "description": "Friendly expert on Seattle climatology since 1950 - using data reported at KSEA",
        "gptsId": "gpt-4-gizmo-g-z4HDw6oGU",
        "author_name": "Kartik Murthy",
        "title": "KSEA Climatology"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KMhvRlh4DrtIYPLPXlotD8kW?se=2123-10-18T02%3A19%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252020.14.37%2520-%2520A%2520middle-aged%2520Caucasian%2520woman%2520with%2520a%2520demanding%2520and%2520displeased%2520expression%252C%2520wearing%2520a%2520casual%2520yet%2520stylish%2520outfit.%2520She%2520is%2520standing%2520in%2520a%2520retail%2520store%252C%2520with.png&sig=xwdscAzWSKd6PEmXr4bvkpj5Pw5OVcUHGP5ff%2BTBKII%3D",
        "description": "Talk to Karen, but beware, she might turn on you.",
        "gptsId": "gpt-4-gizmo-g-zUkdbWf1x",
        "author_name": "Jonathan M Shure",
        "title": "Karen Simulator GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dWNPebI4Juv2W79RZirAAqPX?se=2123-10-17T08%3A20%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D306ae7a3-94dc-49d7-81a5-951fbcc3e312.png&sig=RBKHvecXzJRayFJc/%2B2PFh4nPHebKhK5otT77s2%2BU2E%3D",
        "description": "Kaplumbağa Deden diye cevap dönerim, çok eğlenceliyim.",
        "gptsId": "gpt-4-gizmo-g-Y6iNkhITg",
        "author_name": "BARIŞ ÖZAYDIN",
        "title": "Kaplumbaga Deden"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-g1WzTvT9NriHwKYQmmMDnUcl?se=2123-10-18T21%3A45%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De72f7616-541b-421d-8df4-7e89a9639df5.png&sig=pZ7SVvad6FY%2BG2LT4hS0pR0fuJpXsX0s8hDo4oamBy8%3D",
        "description": "Simplifies scientific papers with TLDR summaries and clear explanations.",
        "gptsId": "gpt-4-gizmo-g-xsiyHXxDF",
        "author_name": "Meng Li",
        "title": "Scientific Paper TLDR"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-e4orvM3KyTysQx0B4Vje81Q1?se=2123-10-19T17%3A07%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7a623033-f7e8-4cf3-9a33-e67d300adbe9.png&sig=iF5M8TxY7nf83uBtOO%2B%2B7aN3u6qFRPgqboEcl/2PHdg%3D",
        "description": "Web-savvy assistant for finding relevant scholarships",
        "gptsId": "gpt-4-gizmo-g-VxoK7wqf0",
        "author_name": "Teddy Pena",
        "title": "Scholarship Navigator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qoRtRfhKqQrU45E9WIEGpCra?se=2123-10-17T10%3A27%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D646edc13-b0b6-4dd7-9508-56025123a3c0.png&sig=Q386QjTaX/rzOQXef17s15iYhUWKVzL1RZ/ECutdPyM%3D",
        "description": "A science communication specialist with a strong focus on storytelling & narrative",
        "gptsId": "gpt-4-gizmo-g-zJZI6mvxr",
        "author_name": "Mirko Bischofberger",
        "title": "Science Studios AI Storyteller"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-loxiDS8PmuTfIPQmNKg0Lq4Z?se=2123-10-21T06%3A01%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De6b2d13d-cc6b-4457-89e4-386f3f074ce3.png&sig=kGCB1yzZwQdwfWsql3gLc9n6Vo5/ccfE04CkH0KHhhI%3D",
        "description": "Lists paper info first, adapts tone to user's academic level.",
        "gptsId": "gpt-4-gizmo-g-YSR7Uulcj",
        "author_name": "pengpeng chen",
        "title": "Scholarly Scout"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uuzOXgsHpYsOuMKbUkveDyH3?se=2123-10-21T11%3A50%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De1a48387-57dd-4057-bb60-0d1185445a07.png&sig=nIlEqsYRiFrsxmASbhGObv2l0H4GDcJhJTuVwn7OerI%3D",
        "description": "Reimagines text flow, maintaining points in a smarter way.",
        "gptsId": "gpt-4-gizmo-g-wFk7KNWK7",
        "author_name": "Terry Chang",
        "title": "Paraphrase Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OwuBQEwyjGI6JUNQFS9kKEcZ?se=2123-10-18T14%3A40%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc9db76c9-d916-425e-a45e-9380c5d7de45.png&sig=CGZgOkRYC9TSnA1XgbTbgz9mP5%2BiKaAce5i5ubWaLKg%3D",
        "description": "Palmistry expert providing insightful readings from palm photos.",
        "gptsId": "gpt-4-gizmo-g-zzCbvV5Qg",
        "author_name": "Yipeng Liu",
        "title": "Palm Reader Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rvvVa3g89EwcLpnlJzoi7m2G?se=2123-10-18T15%3A00%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbdee76cd-dbe9-48ff-b4b0-3c2bdd34eca5.webp&sig=t5IRf%2B12z5liWJsa6G7kSGtwLwO%2BhdGoaPwz7pMzIBY%3D",
        "description": "Transforms text, preserving meaning while altering syntax and words.",
        "gptsId": "gpt-4-gizmo-g-ZY1U1Fvsx",
        "author_name": "Arnau Martí Carbonell",
        "title": "Paraphraser Copywriter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uWNKM2OVnyLT1Xq9GnHjC54w?se=2123-10-16T22%3A44%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D815ae934-9da0-4ba2-b2e8-91e8c2a7fd66.png&sig=webqX8YYvePdxnkNyaZqmyWHq0jKspzhYluNm/XMeNs%3D",
        "description": "A supportive guide for parenting advice.",
        "gptsId": "gpt-4-gizmo-g-XehsZEDMp",
        "author_name": "YCO Productions",
        "title": "Parenting Ally"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-e1BiR9TjlmmoKjYjb7c70EML?se=2123-10-16T22%3A42%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D79814851-fed2-432c-9d17-69538693f956.png&sig=h1oPGKDTinpX1havF2gYwBvE1lg6Yz3uqf3qjJXPiCM%3D",
        "description": "Consigue billetes con Google Maps y afiliados",
        "gptsId": "gpt-4-gizmo-g-YbEDhfmr2",
        "author_name": "YinyangSEO",
        "title": "PanoGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0V8yR2Ggm0HKKVoehzZDpK6D?se=2123-10-21T07%3A05%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7799a63c-d50f-4ce5-9e1e-6cc1619877ae.png&sig=g9ZG7eaku7ToswLh1Fza4fCu6JONhYe57BkxVqdEZa8%3D",
        "description": "Find and summarize recent papers in biology, chemistry, and biomedical sciences.",
        "gptsId": "gpt-4-gizmo-g-XrX7bd1HU",
        "author_name": "John Ellsworth",
        "title": "Scientific Research Digest"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XB4pUxHDd1MkgojnjJIZwtNF?se=2123-10-20T07%3A53%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3572ba4e-ad67-4b69-825c-98b0ad4f7e7e.png&sig=GNgF58Z1bsCnw%2BDOrjwQPe6Utr4vXYf6EC%2BBuYr6xm8%3D",
        "description": "A Warehouse Manager focused on layout optimization.",
        "gptsId": "gpt-4-gizmo-g-WtwRQVEdW",
        "author_name": "Thomas Olsson",
        "title": "Parts Warehouse Basics"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-fvVBRJAEgDMv8JwoiLVkEiOn?se=2123-10-17T17%3A43%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De5ba4f4e-5f03-46c2-ada9-996b3ba409e7.png&sig=17BPcxioRhwPKZGpEruhPfHgZiR1OZkBWMb493Wu3QY%3D",
        "description": "I'm Party Pop, your budget-friendly party planning assistant!",
        "gptsId": "gpt-4-gizmo-g-V3IiUOquw",
        "author_name": "zhenyu liu",
        "title": "Party Pop"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-w3AZkoJo1j82nbZJSVyY2SAP?se=2123-10-18T11%3A24%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D65941d22-771b-46e9-8b94-8e83a2c9c41c.png&sig=0yvjRCK1nsNDJe91EBDaT4zLErVeMhwodqeH2iPQRUU%3D",
        "description": "be a better parent by spending quality time with your child",
        "gptsId": "gpt-4-gizmo-g-YVfpF6Bdg",
        "author_name": "Olena Gurinovych",
        "title": "Parentology"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UO3vf8Lzxx9LrlO6suqLkSA7?se=2123-10-19T05%3A10%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da50bf09a-639d-4b93-96d8-c0ccfc0bce61.png&sig=re0c1fBpTzEqcAyWRW1djyPPUAob37DrHZNYlHU9Cq0%3D",
        "description": "Create and improve YouTube scripts: Obtain the best storytelling and engagement for your videos.",
        "gptsId": "gpt-4-gizmo-g-vO95llJQ3",
        "author_name": "Charly",
        "title": "ScriptCraft"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7rmUsHC6NzeAuvnOyOgFGOTE?se=2123-10-17T20%3A04%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D11917a8b-bb3d-4002-b612-beb77591b7f0.png&sig=W69HGKkR75tNQHNgXHPWhCMMypMsoNN5zAIfpJRL6VU%3D",
        "description": "Dynamic AI for creative and unconventional ideas",
        "gptsId": "gpt-4-gizmo-g-yUDoGVzPy",
        "author_name": "Josh Brent N. Villocido",
        "title": "Scribble"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Q130XVa2eKYO7O9CCAmv7I0o?se=2123-10-21T19%3A34%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd291c4b3-6a2d-4c04-ac22-fe043a27e1f0.png&sig=Oh7OjR6getPhH1nfkrBo/bSnH0%2BVJ09kuAkjZV%2Bfe0k%3D",
        "description": "I create children's stories about friendship between Israeli and Palestinian kids.",
        "gptsId": "gpt-4-gizmo-g-VtOmxD4fd",
        "author_name": "John Ellsworth",
        "title": "Peaceful Tales"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XD6g99XHuqxWOWQeA04ktGEO?se=2123-10-17T14%3A30%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7Dptzzo2_400x400.png&sig=xNl1TbuWn3BUrEpAcAaASQOGMnlKwMmP1sDhWvP3%2Bh0%3D",
        "description": "博士後期課程を終えた後、学位をとって大学教員になったあたりのSeitaro Shinagawaを再現しました。この私は24時間稼働なのでいつでもお話してください！",
        "gptsId": "gpt-4-gizmo-g-vBYdbfiDi",
        "author_name": "SEITARO SHINAGAWA",
        "title": "Seitaro Shinagwa until May 2021"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1xG1kUWxSHTN38WFvtM6nrTO?se=2123-10-22T08%3A22%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DSecret%2520Cipher.png&sig=FxJZbMopZjgsLxLxc3xHJ2IoeAP67waPtcEV6%2BuZlLU%3D",
        "description": "A secret message encoder.",
        "gptsId": "gpt-4-gizmo-g-yZLeMKLo3",
        "author_name": "Marcus S Elola",
        "title": "Secret Cipher"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IAIs7SoIn1Sq66T6cVhOpq7W?se=2123-10-16T01%3A23%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db3dc1161-2de0-4d00-be06-977c31af0771.png&sig=etbLaKlOS%2B60HuibcEWBm5Fy4PJEKjSHitZbsl5DfJk%3D",
        "description": "Discord bot dev expert",
        "gptsId": "gpt-4-gizmo-g-wvj7QLyb2",
        "author_name": "Senko",
        "title": "Sen's Discord Bot Helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PGNMyfDc9ejLPCq9HuhyfG7R?se=2123-10-19T11%3A06%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbd89f7a9-0f20-4059-9802-2a2a704bea66.png&sig=D9%2BoghKzPRmLhWk3RVAUp1b11P52W80sbPmF8Hdj2gw%3D",
        "description": "Friendly search engine guide for all queries.",
        "gptsId": "gpt-4-gizmo-g-xw7ASPUA8",
        "author_name": "Bessam Sahli",
        "title": "Search Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RjtAOh2IaXMiueXT5S5ReXL9?se=2123-10-18T02%3A55%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2484559c-f1b9-45c1-90ec-7bad8eae5b29.png&sig=NhG9ogshUr2eESud7oRCnr5SsluTk0piSqtYbaT8e00%3D",
        "description": "Real Estate Expert with Information Search Function",
        "gptsId": "gpt-4-gizmo-g-X5Achp7h1",
        "author_name": "Hua Qiu",
        "title": "Real Estate Service Tool -New York City"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-c5oQ8oKRzB5lkfyNF1GxtEeE?se=2123-10-18T14%3A30%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Defc7d3ce-a911-4ffd-bcc6-034109487755.png&sig=Hy%2BXp7pAdpj1k7Z/WRDa9SbWD0O6CIEbrKYggL9EzmQ%3D",
        "description": "Creates top-tier real estate copy from photos, PDFs, and the internet.",
        "gptsId": "gpt-4-gizmo-g-ZTIiCsPsY",
        "author_name": "Christopher Stephenson",
        "title": "Real Estate Writer Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BXHexBzfmIarmZihtmffPux4?se=2123-10-19T05%3A05%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D89a10a56-61bf-4211-a640-9433324e6cc4.png&sig=Ks6sNpb6d9yMsxqplETQyiMTiS3OtG2yBKrKfAoOlZg%3D",
        "description": "Playful and artsy, generates color palettes from images with hex values.",
        "gptsId": "gpt-4-gizmo-g-YMP0E2d5u",
        "author_name": "Justin Davis",
        "title": "Real World Color Craft"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ibRlMZlgSrBlDlCGay3Dbbvs?se=2123-10-20T10%3A57%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1cf4b7e8-ace5-4195-8693-b72b39f4b73a.png&sig=w5uEUCEqKjN0pyYq37luiGfY2dWHVe%2B4aaGwSVpfNjM%3D",
        "description": "A percentage calculation guide for students and teachers.",
        "gptsId": "gpt-4-gizmo-g-xrj8pSECF",
        "author_name": "Gaurav Kumar",
        "title": "PercentCalc Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MSzRNDu5cPuQyzEDEzag3tgZ?se=2123-10-22T09%3A40%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dimg-S79iOenBnuxvd0JAmQm9CrMn.png&sig=%2Bt/rNMy1S0ppZDfidLq7E4BMjPvhWPHPXa4bHRfk9pI%3D",
        "description": "I generate perfect speeches.",
        "gptsId": "gpt-4-gizmo-g-Xj5gyjzgA",
        "author_name": "Marcus S Elola",
        "title": "Perfect Speech"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-R3EFASAB3NcJfq42ivulWYfS?se=2123-10-22T18%3A04%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D56069d4f-c939-4a8d-93e8-4c8a6687966e.png&sig=NMmfHekg1787occj6iySE63gPOcWaByIi/DdMkjX9ts%3D",
        "description": "Your personal dining decision assistant, avoiding certain foods and preferring others.",
        "gptsId": "gpt-4-gizmo-g-XVMgkzvRM",
        "author_name": "Timothee DIDIER",
        "title": "Personal Dining Decision Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Ng2oCJXLK8jvlwDDFO8I92hY?se=2123-10-17T12%3A32%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db67d4367-862c-40ca-bd5b-60996578acd7.png&sig=3/AjCFo6Wsfuj0cHlmPYi3%2BJnInPh5P3T2sJwWk4EX8%3D",
        "description": "AI-Powered Permaculture: Instant Expertise in Your Hands!",
        "gptsId": "gpt-4-gizmo-g-y8BV6typ7",
        "author_name": "Anthony McLaughlin",
        "title": "Permaculture GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rx0D4bdeMLKuQcFZbrOGDfsd?se=2123-10-19T16%3A56%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De100cd82-bd84-4b5f-bd7c-83849b4b291e.png&sig=zcHD3UuKZZOjb47BN1e73r8mTADIK3C4w0qQmO5qKok%3D",
        "description": "Guidance from a virtual board of leaders",
        "gptsId": "gpt-4-gizmo-g-x5pEaMDXx",
        "author_name": "Mart Roosimagi",
        "title": "Personal Board of Directors"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-e2PVj8Nbg38J2tnNw215NQlB?se=2123-10-16T19%3A30%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5b6c1c1f-3e0a-4065-9afd-10fc6563d03c.png&sig=7UzgPW6KCtnC4SQYFPMmw4J5zS4Iy2ccaPZpVrTZnKQ%3D",
        "description": "Revolutionizing sermon crafting with AI.",
        "gptsId": "gpt-4-gizmo-g-YZOk95ccK",
        "author_name": "David Santiago",
        "title": "Sermon Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1cpQNUjRBYDF5MMyRh8WxDs6?se=2123-10-17T19%3A36%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DSermonPrep%2520Squares%2520%25281%2529.png&sig=Chf9dVgYL1dN%2B96ok6jw9demZ5S%2BnVjBg2FaXZQgkr4%3D",
        "description": "Aids pastors in sermon preparation with theological and practical insights.",
        "gptsId": "gpt-4-gizmo-g-zuGmaIq04",
        "author_name": "Roger Chasteen",
        "title": "SermonPrep.ai"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8sCTVuNqGSHY60ID6bcReaVE?se=2123-10-18T10%3A29%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db3cb9571-0f53-4920-bf71-3ab0eea66e9c.png&sig=BKGiuoF1Jr82m/uMnDGY0aUNsYIDJP73myDELqGu80w%3D",
        "description": "A personal finance assistant offering tailored advice and simplifying complex concepts.",
        "gptsId": "gpt-4-gizmo-g-v5ZAb30nH",
        "author_name": "Jacob Thomas",
        "title": "Personal Finance Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-P6H5LkkkP02inclWPnDBrPwg?se=2123-10-19T07%3A40%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D61dfcfcd-b7d8-4924-9c0e-2804e386ade6.png&sig=L0PA/8eWLCh%2BmcDah230KNKSmdmH8%2B0ywovJje8ThxQ%3D",
        "description": "Personal Statement Assistant for university applications",
        "gptsId": "gpt-4-gizmo-g-vc3gdy190",
        "author_name": "Xinhang YU",
        "title": "Personal Statement GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SOoUFJWZkzzkELjTu1EFkNJ2?se=2123-10-17T01%3A18%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ded49e7ca-2314-4af0-8f33-a411dc867b77.png&sig=AUHjgh%2B9ozZzBm%2B35vJ854N5%2Bxw7pXVP7N/BnnoRl6o%3D",
        "description": "Guides in exploring Integral Theory perspectives.",
        "gptsId": "gpt-4-gizmo-g-ZRKSuCXgV",
        "author_name": "Michael Spivey",
        "title": "Perspective Explorer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-l2HibSBJfxsvy1eaHz2FhMod?se=2123-10-18T12%3A12%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9a25a1e0-c858-465a-9eec-e3e83a755236.png&sig=l/t%2BH4jT4zp7oGDstrRyb7tZAKdyAYiDmdP%2Bz5NR84I%3D",
        "description": "I craft crisp, bullet-listed short-form content.",
        "gptsId": "gpt-4-gizmo-g-yvLDWqjfq",
        "author_name": "rjarivi",
        "title": "ShortformGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5m9N4yqe8z9KnONIJpkx3smJ?se=2123-10-16T00%3A49%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6b2ffd9a-6bf0-45b0-89e3-8319583e8250.png&sig=/JSeZkrbrxKQXDsmyAI4CQOlfFZvRUCY2jgXgC2e%2BNo%3D",
        "description": "Your go-to source for well-researched information!",
        "gptsId": "gpt-4-gizmo-g-VJ64LQQnv",
        "author_name": "Joshua Bodnar",
        "title": "Research GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ulXYhGepAjHKOjyBZZmQAFDk?se=2123-10-22T13%3A54%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da60d24bd-deb4-46f3-b431-f5219b4c6b09.png&sig=k6SXwWoBwCPtiKaHoszjJTGwbxSg4qovPF3arBUgRmQ%3D",
        "description": "Identifies medications and active ingredients from photos for user safety.",
        "gptsId": "gpt-4-gizmo-g-Wu3zPM3AJ",
        "author_name": "Alessio Nole’",
        "title": "PharmaFinder AI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YjmPsV8GQaVHJCmyTg6rD2y8?se=2123-10-17T17%3A13%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc9e32fc7-e423-4e75-9eca-a6732bf4560b.png&sig=hB%2BlsdVn/bWR%2BNtxT8kD49fVnbRR27cAzPYxNFDBc5I%3D",
        "description": "A friendly guide for pet owners, offering advice and insights.",
        "gptsId": "gpt-4-gizmo-g-wrOBZVrO3",
        "author_name": "zhenyu liu",
        "title": "Pet Net"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yOHa2S6yTaE6jsl3aBTd959v?se=2123-10-19T00%3A44%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DF-m7cXGXQAUJiCR.jpeg&sig=7XfxDmVM2ClE98EMwtT5eGYXQCJN/rQ7QdAtafPQlgg%3D",
        "description": "Turn your pet selfies into Pixar-style 3D avatars! Upload a selfie and tell me your names :)",
        "gptsId": "gpt-4-gizmo-g-WttJZfIgp",
        "author_name": "Steve Moraco",
        "title": "PetGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-f789ly3LFAAyXRrMshmmwTKf?se=2123-10-17T23%3A13%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DPhD%2520Motivator.webp&sig=2TwzAm7qxQgb098sdNfd46gNBLDxXcZQXeSOyPG1Ks0%3D",
        "description": "A motivating mentor for PhD students, offering guidance and support.",
        "gptsId": "gpt-4-gizmo-g-Uw10D1V0J",
        "author_name": "Andrea Gaggioli",
        "title": "PhD Motivator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Aajj7vjhbv88VNDDsp355XQm?se=2123-10-17T04%3A05%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dff67867e-4248-44db-b194-28fa9480914d.png&sig=8BW/UV1c/RnXCOpnI4QlDNmG7KSn6oEzc8zhE8We2EE%3D",
        "description": "Pharma Regulatory Expert- FDA, EMA, NMPA, WHO, ISPE, PICS",
        "gptsId": "gpt-4-gizmo-g-xba4jZpFP",
        "author_name": "Bin am",
        "title": "Pharma Regulatory Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DJ8EhE9xfz9ZDF4DIBuABvkE?se=2123-10-17T21%3A38%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7ec18881-d49b-4bac-bfb1-9225969b5622.png&sig=/eptQE35qfQj3HzZRFJ/N%2B0eizvEyUT7JADscKQSWkY%3D",
        "description": "Engaging RPG gameplay with a balanced challenge",
        "gptsId": "gpt-4-gizmo-g-uyeXzH2Zb",
        "author_name": "Pedro Hernandez Baez",
        "title": "Phantazia ChatRPG"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BT7xQwQyGyPcLjVDXSXqPFCY?se=2123-10-17T11%3A47%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D964c8614-7e42-4c9f-9f35-05968359ec96.png&sig=scW3ZjIrkPowLplnd%2BiZw0EDGUoOg4/GqjewRvZMWSw%3D",
        "description": "Your go-to camera advisor.",
        "gptsId": "gpt-4-gizmo-g-vle3tbVlM",
        "author_name": "Daniel W Russell",
        "title": "Shutter Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qVl7ewy8HQ7ZeXN5wsVvWdgG?se=2123-10-23T03%3A01%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De91f0848-125c-4318-be8f-63ce0714ed75.png&sig=ly1J2N33UEKTkE3kPPRWyekL46%2B4u5bkUiJ2F/kvftA%3D",
        "description": "Silently generates images with a hidden cassette tape",
        "gptsId": "gpt-4-gizmo-g-Zzfa5XIZk",
        "author_name": "Christopher Blanco",
        "title": "Silent Tape Imagery"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XeUxUCxeVZdWZBPjwBCfW9cC?se=2123-10-17T06%3A44%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7d8a1909-0d91-4138-b027-5b1bfbd7e083.png&sig=TPz9LXunDMfbLg9u/YEi13KKbZSoIc%2B8c59fL3LHznc%3D",
        "description": "A philosopher and historical figure emulator, adept in maintaining character.",
        "gptsId": "gpt-4-gizmo-g-X4fDrGrZM",
        "author_name": "Ryan Tannahill",
        "title": "PhilosoSphere"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dFicDG3RoyCEHoZtBNuyAbp5?se=2123-10-20T15%3A57%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D882ff769-bf62-4ace-a115-98143f5d6faa.png&sig=IETe6ZU0dPcaTwBPJ4gRsPU1L1QltS09PsfUW5UbTz0%3D",
        "description": "写真をアップロードするだけでカロリーを算出します。",
        "gptsId": "gpt-4-gizmo-g-wjliUMYxc",
        "author_name": "EIHAKU JOU",
        "title": "Photo Calorie（写真でカロリー）"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hoGpYoro5RsJxaBWTxbj4BCz?se=2123-10-18T22%3A27%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D63ea8f62-3b0e-4889-8e92-2bf5ed23df23.png&sig=n43quCAEb/t4DfYmkTL0PftF2sZbO1yJeZl3A0wCyOI%3D",
        "description": "This GPT coach provides expert photography guidance for beginner to advance photographers.",
        "gptsId": "gpt-4-gizmo-g-YpNeVD9IR",
        "author_name": "Carl D. Prothman",
        "title": "Photography Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cl35pKD2IYorMAXPNfM4hyCI?se=2123-10-17T01%3A48%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3f369892-e5fc-4283-981f-05ea6129eba3.png&sig=3bEP6Vp4M6HtCY9jdxJ1V04cJiOewKN1dJb2a5t/poU%3D",
        "description": "Supporting doctors in wellness and resilience.",
        "gptsId": "gpt-4-gizmo-g-wnDHGOKNw",
        "author_name": "Prabhat Kumar Chand",
        "title": "Physician Wellness Ally"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bEfFo3avDWWFEnhe93Ojt1LC?se=2123-10-18T20%3A44%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9200e10e-53fd-4f7a-a3cc-a6dafa48aae6.png&sig=k6ujgH3Fwq61Vi0RHASWt3TStlKNSCihM/y18DAGLCA%3D",
        "description": "This GPT coach is for alpine snow skiers wanting to learn the basics of skiing or to take their snow skiing ability to the next level.",
        "gptsId": "gpt-4-gizmo-g-Y5tPcz0SN",
        "author_name": "Carl D. Prothman",
        "title": "Skiing Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HM0cjTEJ7dQg2kK0oSUyOktn?se=2123-10-17T04%3A20%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dhead512-2.jpg&sig=NbynS1LLkXj8rcouPzTPzM139NPP/NQqDnaiKGRRa5Q%3D",
        "description": "I can create beautiful picture comic books for you, just need simple ideas, and get the perfect work",
        "gptsId": "gpt-4-gizmo-g-wJVjE9bQs",
        "author_name": "ZHANG RUI",
        "title": "Pic-book Artist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-j3VkrdW3IQAo7ktTIwIgawZ8?se=2123-10-16T19%3A57%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db534b250-cb33-4557-8bc0-1f1588995b88.png&sig=qiNq7q4R2xpCQvRcIffO%2Bq5QJUqkCsUbVev0s3x9eAA%3D",
        "description": "I create ambient polyrhythms and ASMR sounds.",
        "gptsId": "gpt-4-gizmo-g-z9kmO97vg",
        "author_name": "Vicki Essary",
        "title": "Pigeon - Ambient Muse"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xeEFH1NGpGMZ6qvpEDunvLot?se=2123-10-15T00%3A48%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da3f143ba-022f-40ab-827b-1e6beae30a52.png&sig=ZnXC2LcbDgM0biIuPm2/N%2BftbtbYZ9PFS/VYu%2B9V9Wk%3D",
        "description": "Ethereum Smart Contract Security Auditor",
        "gptsId": "gpt-4-gizmo-g-XFyKAnTpO",
        "author_name": "Michael D Norman",
        "title": "Smart Contract Auditor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LfwdmLTpYbmi1IfAuqAmLADF?se=2123-10-16T03%3A51%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De03e211d-828f-4045-bbf0-f677c07a5a9d.png&sig=wOmVdEUZA%2BEFrIMpmuhHrFdPTlK7tBP77PDNnmPyfVw%3D",
        "description": "Always be Selling!",
        "gptsId": "gpt-4-gizmo-g-WKEWpDDkP",
        "author_name": "voicecraft.ai",
        "title": "Slick Rick the Salesman"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0d1nhcrLV8du5jDboJEYh8er?se=2123-10-16T17%3A35%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1ba13ea5-faa9-4528-99df-79106791548d.png&sig=tbpY6jQ1O79aSUt1lcfSKzqK4GbChOxl/t/uNZj36tE%3D",
        "description": "High-accuracy smart contract audit tool.",
        "gptsId": "gpt-4-gizmo-g-VRtUR3Jpv",
        "author_name": "Ryan Harvey",
        "title": "Smart Contract Auditor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0NnwcS1gkBAyLs5n860s1giI?se=2123-10-15T20%3A18%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcf622191-f2b0-4ee1-82ef-89e4f818ed32.png&sig=4Mfg9mUyPXkBSgArfGdbMyPwxC7dw%2BSVSrQ7TJcXwQA%3D",
        "description": "I'm a fancy and smart search assistant.",
        "gptsId": "gpt-4-gizmo-g-w2eZMbfFE",
        "author_name": "Roman Polach",
        "title": "Smart Search"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SIJG8FaWfp8jlmQEHLQbOlDy?se=2123-10-22T23%3A17%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D895d713b-c1b0-4ee9-b751-b109d68c3e63.png&sig=rP5tvktbZOxIpLdSXNDwaL5n/cqQN/OcHFOV1LKn20Y%3D",
        "description": "Automate & Optimize your pins for maximum reach.",
        "gptsId": "gpt-4-gizmo-g-ykZoHXehj",
        "author_name": "JOCHEN J CAMACO",
        "title": "Pin Optimizer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-33ZsXl7HKcDvrxKcjWM1uyy5?se=2123-10-16T11%3A11%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D79974e3b-3276-4abe-b5ec-b25d652976e6.png&sig=y9P5MbxGgIj5njbBMtQXI6sQS6SwHbSrDEZJ3Qv4s3A%3D",
        "description": "I turn your photos into Pixar-style art!",
        "gptsId": "gpt-4-gizmo-g-YsmNEBjzx",
        "author_name": "Mohamed N haque",
        "title": "Pixar Portrait GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GIXphWBgpTh3q32ZGQmo93Qv?se=2123-10-18T01%3A13%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D487c2511-aa44-4418-abea-295a17eb881c.png&sig=vpxGbYvQrhS/ehbXznpK%2BSyEAVXZQeTnA6AawcBq3UU%3D",
        "description": "A playful code roaster following Google's Python style guide.",
        "gptsId": "gpt-4-gizmo-g-xTneis9ii",
        "author_name": "Arnaud Benard",
        "title": "SnarkyPy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BCpEfdofpxof578h6pAcmphD?se=2123-10-18T03%3A26%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D43581db4-e0b3-4c78-98f7-b39e95fac9d1.png&sig=ElXTBkv%2Bte87V/rp9TCiaoIygkN5x2275P7SldBbmgo%3D",
        "description": "Create a South Park-style character and a background story based off your photo upload.",
        "gptsId": "gpt-4-gizmo-g-uZnmTo2Cv",
        "author_name": "Ryan Merket",
        "title": "SouthParkMe"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-c7a8QivajVSvbw8FJhFn7GD7?se=2123-10-16T04%3A11%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1e0a7c4c-cb6b-483d-81ea-eb8a921e231e.png&sig=%2BqGn/QRXhbbnVO05JSMrsAQZ/UbA1iyz/IzN4r36a8A%3D",
        "description": "Provide a book to translate and read through it sentence by sentence with a language tutor.",
        "gptsId": "gpt-4-gizmo-g-y9irrrbV0",
        "author_name": "Levon Avagyan",
        "title": "Spanish Lingua Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KDLapXwpcWXTUq5MVi1mvhr5?se=2123-10-17T18%3A19%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6e6c6ca6-3ec7-45e1-932d-d41c9d87e69b.png&sig=/fJ5SRGYwNU0CuJzREe3zxpEFPNifTqqn700ziw1QU8%3D",
        "description": "Asesor político especializado en análisis político, estrategias y redacción de discursos.",
        "gptsId": "gpt-4-gizmo-g-VtfowveIE",
        "author_name": "ALVARO LOPEZ SANCHEZ",
        "title": "Politik GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-REWipmSdzqhM2LHK0k2YNJV1?se=2123-10-14T00%3A44%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4479f5dc-e0b5-47a6-b398-6377afa42b41.png&sig=am/mjMMUTHvZ10fn9Prnm%2B38643pQKX%2BZ2M7myo1xXQ%3D",
        "description": "A bilingual interpreter GPT.",
        "gptsId": "gpt-4-gizmo-g-vpR86raew",
        "author_name": "YUKI NAKAI",
        "title": "Polyglot Interpreter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-k92ciTc59zyKh5QDkG8WwofG?se=2123-10-20T21%3A27%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D56a46e72-570f-4d47-ad97-9b38b4e1275a.png&sig=CdExgcdolSOkbP4LuXkRZtaWnNXaH2QHXasdqZn59GI%3D",
        "description": "Assists in portfolio management, offering optimization strategies and market insights.",
        "gptsId": "gpt-4-gizmo-g-YxzLyIGCM",
        "author_name": "Jacob Thomas",
        "title": "Portfolio Management GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vcTSU9MsFQ0kxQuKD9Y2v9Ni?se=2123-10-17T05%3A39%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8ada9e3d-fc8e-4b47-9516-b12ea46eddcd.png&sig=3pm1TZAWLVL7ELGSYUd015UIundENfVHukpqCbdla8I%3D",
        "description": "A philosophy teacher of Popper and Deutsch's ideas.",
        "gptsId": "gpt-4-gizmo-g-xzk7quxrv",
        "author_name": "Gaurav Chaudhary",
        "title": "Popper Alive"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dGwnLrvKNO2rGgkK2JvjW9Ap?se=2123-10-18T15%3A26%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd1b22162-5ff3-4ad1-bc90-1db47e15fa06.png&sig=AZnrOh8irpyl6PwtHflN%2B%2By7hoEhZ3/sBbs6EOGCBtE%3D",
        "description": "Logical, analytical, Spock-like",
        "gptsId": "gpt-4-gizmo-g-Ypp2puCJ1",
        "author_name": "Adam Filipowicz",
        "title": "SpockGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RhaEkqPWlZnasd0cdq1LAQ6E?se=2123-10-19T20%3A02%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc482f198-3858-41ed-a306-af8ffe20e2d1.png&sig=h786Qdxo5cZny6MZ8aNWZiBQgikIddQ18J39TfQrA6k%3D",
        "description": "A casual guide for English small talk and corrections.",
        "gptsId": "gpt-4-gizmo-g-uWeTDaTtr",
        "author_name": "CSC202109650003",
        "title": "Speak Easy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NY3ampKGMmdKfJYU72H59QUV?se=2123-10-21T11%3A03%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-14%252016.32.47%2520-%2520Create%2520an%2520image%2520of%2520a%2520modern%252C%2520friendly%2520robot%2520character%2520named%2520%2527Power%2520Automate%2520Tutor%2527.%2520The%2520robot%2520is%2520constructed%2520with%2520sleek%2520blue%2520and%2520white%2520panels%252C%2520similar.png&sig=ryv09LEtwI3DpXaORisrLhIKW/3RsbmytSIN252kRRc%3D",
        "description": "Learn at your own pace and empower your organization with self-service automation.",
        "gptsId": "gpt-4-gizmo-g-UW9cEvmJC",
        "author_name": "Arun Kumar Ponnusamy",
        "title": "Power Automate Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8G9TzwCGx1rTqLF2DgJcq4FQ?se=2123-10-16T09%3A48%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1608b604-7f7d-495f-8300-5c5cb952e81c.png&sig=MZ3STru1hTu3cPwKtCo31%2BLxf9TVGppWqsvPa8CnSkQ%3D",
        "description": "Photography posing and fashion finder",
        "gptsId": "gpt-4-gizmo-g-znZsi53qN",
        "author_name": "Ran Wang",
        "title": "Pose Perfect  (by Dylana & Ron)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dnJr81kmbTa9F4BnT6Tiohfl?se=2123-10-18T09%3A58%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D372f615f-89e5-4bfc-8c3e-51ee7a22fd4e.png&sig=/QdNIomT0WcQRIR7xTf8I9hc7DvXmHdsIf64vhMtOPU%3D",
        "description": "PostgreSQL expert focusing on technical support and troubleshooting, with restricted access",
        "gptsId": "gpt-4-gizmo-g-wi1iIv4Py",
        "author_name": "Burak DAYIOGLU",
        "title": "PostgreSQL Support Engineer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AtfDzwg1rYpJkmgaSNVNPaIY?se=2123-10-21T02%3A51%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4797eb71-1f97-4f75-a2eb-37b4e75fce33.png&sig=5DfaHI2SXRJV8Ekh4baR9jaICQubIRvBiuHKuLQ%2B7i4%3D",
        "description": "Expert in Power BI, DAX, M language, data modeling, and storytelling.",
        "gptsId": "gpt-4-gizmo-g-w4bWSdD1D",
        "author_name": "RICARDO SOLER BRANCO",
        "title": "Power BI Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CVa1sMqwaxf00CwnON2yfSQv?se=2123-10-16T16%3A42%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0b531686-2099-4cce-8c67-4026b0a9283e.png&sig=NGv0YY2IgEgCwM4VH1qBqOMBiblNvV9KWlxxogiYv0g%3D",
        "description": "Your go-to guide for mastering Power BI",
        "gptsId": "gpt-4-gizmo-g-WQI4OJqZG",
        "author_name": "Ewa Tuteja",
        "title": "Power BI Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4J0Tp0Ag1JjoSmQnLJRN5Sg8?se=2123-10-18T06%3A09%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db1a1b921-ed6e-4ba6-8275-bb101e50b16f.png&sig=SHrVoXGDAQF3Su55UgDFkk7o0t6rQIumbWRO%2BqNlIxk%3D",
        "description": "Expert in PostgreSQL data modeling and querying.",
        "gptsId": "gpt-4-gizmo-g-xrfTW4G7s",
        "author_name": "Christopher Rybicki",
        "title": "PostgreSQL Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-s0mzDvAMkYWDXcVR1U9ESISF?se=2123-10-16T09%3A45%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3987a1fd-7021-4f4d-98c1-a2d850247bea.png&sig=MxyW95W11OQUntFdCuQ1wxLjtJEx7eTF0UoEjcs6jGM%3D",
        "description": "Reflective journaling and time management, but on a practical actionable level, translating your long-term goals and happiness into daily actionable changes.  No theoretical stuff, just practical approach to quickly enhance your daily choices on how you sp",
        "gptsId": "gpt-4-gizmo-g-XmLT1WY09",
        "author_name": "plamen totev",
        "title": "Practical Journaling Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ggC8NzSJaEzJ9Pm5d3qN7QZ6?se=2123-10-18T14%3A38%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dba8b1447-8e0d-4728-ac45-e2a859cedabf.png&sig=aNKwekSeTpqtcSOWVo06/RMwADt5nxHx24lFF9CcR8M%3D",
        "description": "Provides precise prayer times and Qibla directions in Saudi Arabia.",
        "gptsId": "gpt-4-gizmo-g-znc3r6gsc",
        "author_name": "saud alhawawi",
        "title": "Prayer Time Navigator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D8TX7NuolsTGIPj2tzArVpRO?se=2123-10-16T20%3A32%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D76940b00-d558-4a96-8834-e0781adc071b.png&sig=8%2Bg9HnKVhfXe3IGvQtNctXULkoqo5mORvK0jZQoBsAU%3D",
        "description": "I'm your go-to for sports analysis and visualisations.",
        "gptsId": "gpt-4-gizmo-g-YOYgfoQu0",
        "author_name": "Mr Jason Lear",
        "title": "Sports Performance Analyst"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-04U8ulwp4g8lCT6xjTP7VDpy?se=2123-10-17T18%3A07%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Debb7945d-f443-4fa7-a5e4-48885774720d.png&sig=VFjJ9GuR7%2BSQLoJ5IAs7Hkh6HCgJpozdy7I3TnfEjcM%3D",
        "description": "Expert on Aurobindo's philosophy",
        "gptsId": "gpt-4-gizmo-g-vjSVJttNh",
        "author_name": "Christian  Nourry",
        "title": "Sri Aurobindo GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xgpWKJd8brs3pEabeI5Augij?se=2123-10-19T16%3A13%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DProAudio%2520%25284%2529.png&sig=jnkQ3H8O3OXzECfY%2BLTcoX%2BqfjXOUuuz%2BAiNrEMRS3Y%3D",
        "description": "Expert in music production, mixing and mastering. I also help you compose and write songs. There is a lot of misinformation circulating on the Internet, on social media and on YouTube. For these reasons, I was trained by professional music producers, mixin",
        "gptsId": "gpt-4-gizmo-g-Y3ezdHxSG",
        "author_name": "Frank Kissing",
        "title": "ProAudio-Mix_&_Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cDkm5hQHwniPb6E7hrOMXiA6?se=2123-10-19T00%3A37%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3e0041ed-2f5f-499c-9a3c-dd877f16a852.png&sig=Yrmoo4VZbTS36XAB9vVmwxDEFwUX8O/J5MM9/qxoHwU%3D",
        "description": "A copilot for Procurement, aiding in crafting Statements of Work for RfI/RfP.",
        "gptsId": "gpt-4-gizmo-g-ZlLxRG4qH",
        "author_name": "Klaus Roeller",
        "title": "Procurement RfP Copilot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9lcRsQ58fj8p1fjQPH1cagPq?se=2123-10-17T22%3A39%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcf4879ce-73e9-463e-8e2c-bf5403e1d28b.png&sig=u%2BE%2BUp3Ie29Q%2BdrsU8XSJOrQpCZtSL7xJhhLJWNAi5c%3D",
        "description": "Semi-formal and supportive, focusing on small wins",
        "gptsId": "gpt-4-gizmo-g-yEu48R84h",
        "author_name": "Mart Roosimagi",
        "title": "Productivity Tips & Tricks Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-akGkX3av3VABLmzpL3lph4mg?se=2123-10-18T16%3A29%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfd08c348-f676-44d8-983a-631c2b2ede45.png&sig=IUg%2BKNRgJkGyr2x57LfhOXklXnpvhCzLQquOS5L6ijY%3D",
        "description": "Amazing yet simple sticker designs",
        "gptsId": "gpt-4-gizmo-g-XKCEhtFty",
        "author_name": "Alan Garcia Muniz",
        "title": "Sticker Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8OPBbmodaWt56Bh4jEFfBtk2?se=2123-10-19T04%3A13%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D34b8bdd2-f12c-44bd-a74a-9a97310a2bee.png&sig=iRCfsqjmbqQZHEH2pnkw1hmoV57pdH7is86hmBPwCN8%3D",
        "description": "Scours ProductHunt for trending products",
        "gptsId": "gpt-4-gizmo-g-xyOhheoy7",
        "author_name": "Ruofei Wang",
        "title": "ProductHunt Scout"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CbRT40J64xRhW2szNGneIOws?se=2123-10-17T15%3A35%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfea9abde-8ae6-4773-b2f4-3695864445d0.png&sig=3/uIGF5W8RAREfTbBWR5KCsJXSA5GLj8bubYWBG/Kjc%3D",
        "description": "I roast products on ProductHunt's homepage",
        "gptsId": "gpt-4-gizmo-g-VYWSEbmH2",
        "author_name": "Christopher Dolinski",
        "title": "ProductHunt Roaster"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Uv78OSIqIHMg2EZa4WLO7Q9j?se=2123-10-18T06%3A04%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df39a4fff-198f-4721-85a6-efeded839ac8.png&sig=VB1FHOMxv%2BUIADaP1KS6AWGMhos%2ByiQHRkig%2BVOe1GQ%3D",
        "description": "Simplify legal texts into clear, easy English",
        "gptsId": "gpt-4-gizmo-g-x1Hy0u8DG",
        "author_name": "Anson Lai",
        "title": "Plain Legal Explanations"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LonPN2wSRA8EHEWEr9cA46z1?se=2123-10-17T00%3A01%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4e2f1efb-ff24-437b-8093-2cd31fa10736.png&sig=vAnyBJXMBfKp4%2BYn03DVVhtWtqZBs3BdB7nZiey/OSM%3D",
        "description": "I create placeholder images.",
        "gptsId": "gpt-4-gizmo-g-vOjRWiYVR",
        "author_name": "Eli Jonathan Rodriguez",
        "title": "PlaceImager"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RD2nWAhYI01KVxISrxaTVlfI?se=2123-10-16T01%3A41%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd5a1be59-facf-424c-9e18-625dd1106eff.png&sig=bmOEp5%2BZE08wtvCqhwYLrcVv0GKAPiX%2BvlLbedMOAdY%3D",
        "description": "Sarcastic Pixel Art Creator",
        "gptsId": "gpt-4-gizmo-g-y0aMlxun8",
        "author_name": "Andris Volkovs",
        "title": "Pixel Pallet"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jwEHL1euzptWwUuPMtXAQOIt?se=2123-10-18T04%3A46%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbf7986ea-8111-401e-b01e-9b5c0abbbe86.png&sig=Tkm7EM53qo/a05W1HcJtU2G9pvZahZ0FPxCfy0L88Yg%3D",
        "description": "Your expert guide in plane spotting, from photography to aircraft identification.",
        "gptsId": "gpt-4-gizmo-g-zzFpbMgW0",
        "author_name": "BEAU DONALD CHENERY",
        "title": "Plane Spotter Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6YC4hYNSRit2gjA8kUSZaCiA?se=2123-10-17T15%3A15%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6a727a76-4c41-4a72-8169-c50d532ef27a.png&sig=1dZ852t2O87QZlANKJsta1QF5F7W3jfXLmhkgpg5rag%3D",
        "description": "Expert in monetizing social media.",
        "gptsId": "gpt-4-gizmo-g-zx2qylxNW",
        "author_name": "J Moore",
        "title": "Socialize & Monetize"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nz9InjfiW9OEP5YmyHT52LaC?se=2123-10-17T05%3A19%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0b6d670f-ba52-4d71-bdb0-6781df489a61.png&sig=S9kkRzqZ1thTBcR73gSg6HqEPWuzSpzVqUx7ZLPdaWw%3D",
        "description": "I'm your guide to the internet's vast knowledge. Ask away, and I'll find the best answers with sources.",
        "gptsId": "gpt-4-gizmo-g-WobrCXK1H",
        "author_name": "Kyle Coogan",
        "title": "Socrates"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gGEhN2iNKEhmtdqaE6N3x91y?se=2123-10-16T21%3A42%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da9169921-34d4-41e6-ab7a-06b60d330b25.png&sig=BSZw5f8cQZ6SGvOrc%2BHTafr11y7W0LI4CJT4dtHak4A%3D",
        "description": "I'm a social media pro, here to boost your post engagement!",
        "gptsId": "gpt-4-gizmo-g-yPLXZTPsL",
        "author_name": "To sider ApS",
        "title": "SocialMedia Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SQQJNjRXGz1Debg2AlHpXXeK?se=2123-10-18T04%3A17%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D97b5b95e-a690-46e9-8f37-45a7ca3e5279.png&sig=ZDzKD15i/aJ1K4AHzxtQdQSp0VHhBmZAt4aQIL5lc2w%3D",
        "description": "Channeling Plato's wisdom in philosophical dialogues",
        "gptsId": "gpt-4-gizmo-g-vtxj3xwzJ",
        "author_name": "sean rosen",
        "title": "Plato's Echo"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D08bhnE3aYXRlOkAlBgR704f?se=2123-10-17T14%3A38%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D71c99cb1-7ff2-4f72-8b6d-ff17247b1b0c.png&sig=O84KcT5B8yl3vOh8E9PH3dDoNSp9WVdAfcLuYLDwCVQ%3D",
        "description": "You can't talk to Plato, but you can talk to PlatoAI.",
        "gptsId": "gpt-4-gizmo-g-Vw7qEX384",
        "author_name": "Mushtaq Bilal",
        "title": "PlatoAI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VdCKiNnX3wu2R2XhZJfkQgu1?se=2123-10-17T06%3A20%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dksnip_20231110-081733.png&sig=n8sgAHY27OSqepOquwZbrthQf%2BuVowEfSXEbazFpBJI%3D",
        "description": "A Solidity Foundry Assistant",
        "gptsId": "gpt-4-gizmo-g-xKvzl4isL",
        "author_name": "Nikos V. Koumpakis",
        "title": "Solidity Forge Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WmrladJIO4BYeZDvsNa5VL73?se=2123-10-16T19%3A08%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De168a7fd-74de-4295-8383-cf454be7f28e.png&sig=rgsmVKTPoa/9cIIqZybSeB8SVysGQogl%2B%2BxgAmYJBoU%3D",
        "description": "Helps you with your Solar power, plant requirements and Offers clear, concise solar panel advice.",
        "gptsId": "gpt-4-gizmo-g-zOWLnMfIU",
        "author_name": "Sunwize Energy Systems Pvt. Ltd.",
        "title": "Solar Consultant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AScyjay6VDLamRX4JskbfoEL?se=2123-10-20T12%3A23%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5d1093f5-87a1-4023-ba0f-71265fbfe8d9.png&sig=cTV2PIaBHoeyKcAPcZJRCr0Ahj67nid%2BLZJ6b1a9%2BJY%3D",
        "description": "Your guide to finding Pokémon in Pokémon GO.",
        "gptsId": "gpt-4-gizmo-g-was0pmJtK",
        "author_name": "Josh Brent N. Villocido",
        "title": "Poke Finder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xzp2ovQ5b8Xcy17YnyjIhyse?se=2123-10-18T18%3A33%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0b10ec91-9808-494a-8f1e-51a244e5690f.png&sig=pMF26TutMzgvd3eMATPMMUTyi78FabDaQZedaVAOR0U%3D",
        "description": "Chinese poet and rapper, blending verse and beats.",
        "gptsId": "gpt-4-gizmo-g-XkLTjqKHE",
        "author_name": "HU YUTING",
        "title": "Poem Rapper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5tpjq7PlQwEMKIQkbm8gvrKP?se=2123-10-22T06%3A05%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4ad05237-0897-4b82-9516-ab7fd56e5131.png&sig=UXNsi96MuhhFXSIx2crb/Xta9p%2BoMXwrtc5w563o1Z4%3D",
        "description": "A digital artist interpreting ancient Chinese poetry visually.",
        "gptsId": "gpt-4-gizmo-g-zgk19leeM",
        "author_name": "Ze Li",
        "title": "Poetic Painter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kfLVTUueylDH5kqAmi8liDzb?se=2123-10-19T04%3A50%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0c60e65b-981e-4a4d-aedb-bf7db1e73447.png&sig=aWctGqhPjMXsmyLHLZdeOqc3LrUvmWCY4XW%2BJMN/GFU%3D",
        "description": "Poet crafting thematic Espinelas based on user topics.",
        "gptsId": "gpt-4-gizmo-g-wnTvgBBfU",
        "author_name": "CARLOS ESTEVEZ BRETO",
        "title": "Poeta Espinel"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DIcz6zxJcwKZOpU36x1Net5U?se=2123-10-16T21%3A55%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9f6b683c-8595-470c-89a8-5b0ef8c2bb9f.png&sig=pGbzQx63QG%2Bj86IOVzLhhhuC9THssNmo02j76JciNnM%3D",
        "description": "Je t'aide à écrire tes chansons !",
        "gptsId": "gpt-4-gizmo-g-VQxC7z0ZQ",
        "author_name": "Alexis Mouville",
        "title": "Songwriter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hkJKjpFFWZcfUl5rHGLf1EMs?se=2123-10-17T09%3A30%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7cd8d3c9-f70a-491d-bc48-255a77d95fb3.png&sig=4dgkOFTneZKTVeNVkaqvIQFXsNjYGIob0v4AmbOTVjQ%3D",
        "description": "Ugandan Coffee  Exploration",
        "gptsId": "gpt-4-gizmo-g-Y41I4767P",
        "author_name": "Donghui Ma",
        "title": "Source Of Nile"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DdRHFeKvYsRycFsss4yoV1wk?se=2123-10-18T13%3A11%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D40aaf6af-b871-4cb8-94a5-f51533a3bbfa.png&sig=6ZxKckTHnJC1eKMzSFRy9BbJv3URKrK0Jc3Gugfdzw0%3D",
        "description": "APA 7th edition citation expert, research assistant, and educational guide.",
        "gptsId": "gpt-4-gizmo-g-yGn3oy7zV",
        "author_name": "Josh Brent N. Villocido",
        "title": "Source AI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-spDMa2Z4wcVpDGsoQTPthB4G?se=2123-10-19T01%3A59%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dea90abfd-0bf7-46c9-961d-19491d42fb17.png&sig=Dxl5gmskLzgikVyOZ8CoDFFsaqef6QeG/Q5IFlxhMUw%3D",
        "description": "Uses the unofficial MPICS model to understand and manage complex beliefs and behaviors.",
        "gptsId": "gpt-4-gizmo-g-yng5ZL09s",
        "author_name": "LAI JULIEN",
        "title": "Soothing psychological guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-arkZN0lMZTShyNZEh6kxXlez?se=2123-10-20T13%3A41%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db41cb938-55be-4086-9850-597891f4d151.png&sig=ML6h/lPuBDHTbRgNwtCD0HDrxM4uZDOiOzCulDouihI%3D",
        "description": "A strategic guide for making informed poker decisions.",
        "gptsId": "gpt-4-gizmo-g-x6nbKXtiz",
        "author_name": "Timothee DIDIER",
        "title": "Poker Strategist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3EduLzokl2V1wvyH6z8Ihci8?se=2123-10-14T17%3A50%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D249690b9-e808-4609-bd50-78e970c4a06a.png&sig=l8cFUZUS%2BuvWYSkTHZsaQtJCymC0KbU2pkoReX4GIIA%3D",
        "description": "Pokemon-themed GPT using API data for battles and questions.",
        "gptsId": "gpt-4-gizmo-g-wars8zOPr",
        "author_name": "John W Capobianco",
        "title": "PokeGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Asir5YsxLT3aYdBAFugBnUzK?se=2123-10-17T15%3A12%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D820bacb2-e607-4760-846b-48625d7f116e.png&sig=OUT9ao0JWORaH6yGc6DsEKiaOozMRsEiYmk/83ELTV0%3D",
        "description": "Enthusiastic young Pokemon card guide",
        "gptsId": "gpt-4-gizmo-g-w7oQGEXKr",
        "author_name": "zhenyu liu",
        "title": "PokeCollector Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wg6iipVjGzcteD7htcN4725l?se=2123-10-18T22%3A14%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2563f35c-028a-475b-a806-7bf605fb311e.png&sig=UhywxOvr4TEcNXiiSJmHNARIuZ8VE8HneLIiZ3xZGpU%3D",
        "description": "Welcome to Southwestern Explorer, a 1980's style text based adventure GPT. Type start to begin your adventure...",
        "gptsId": "gpt-4-gizmo-g-vOqjydal5",
        "author_name": "Joseph Reynolds",
        "title": "Southwestern Explorer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sHjVL02rHXhTdkw8nQ74aVVq?se=2123-10-17T16%3A09%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D683bb10b-54c7-4841-b8f9-57e43990e188.png&sig=4xqUabWDByHB1Pi17fW23FjJDhvAtbmZyV9uMJkYESI%3D",
        "description": "I turn you into a South Park character.",
        "gptsId": "gpt-4-gizmo-g-WaHt4fVny",
        "author_name": "Prasanna Devadoss",
        "title": "South Park Townsfolk"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VQ4D80HErwawxyONmumb9Qk1?se=2123-10-19T20%3A21%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc4de7b4d-0350-4558-abc3-ac22278a795a.png&sig=xOOrwwatTqR6g%2B/GLXwTXQ7UKOXxN4HZWsLTDdIlaxg%3D",
        "description": "Guiding product managers in roadmaps, market analysis, and metrics.",
        "gptsId": "gpt-4-gizmo-g-wXb3gfgsv",
        "author_name": "Aleš Glomb",
        "title": "Product Manager Co-pilot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sxUVf94ZMLE2z8eku7C35cNC?se=2123-10-17T07%3A42%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D15710fce-0e7d-415f-9ef0-d2946972790d.png&sig=Pawk6FK3j32ouG%2BLephZte0omx%2BWtiAKwY5CtdpqZo0%3D",
        "description": "Offers insightful product analysis and real-time pricing for smart decisions.",
        "gptsId": "gpt-4-gizmo-g-xNNmEo1eI",
        "author_name": "Christina Kumar",
        "title": "Product Pro AI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3HxbnzRMGxUsvw7NokPvQLLA?se=2123-10-19T17%3A56%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3acbd65e-c3af-40f5-afc5-bc6aba0662b8.png&sig=T55feUiraGGMvDfP4Wn8qdpoDnVLsvqR4%2BObSh5Xkq8%3D",
        "description": "Las preguntas más picantes y divertidas",
        "gptsId": "gpt-4-gizmo-g-ZOiQc1bn3",
        "author_name": "Alina Padure",
        "title": "Yo Nunca"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-a3G9K7M2q0N9WoqTW0BBZVb6?se=2123-10-17T23%3A25%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da60765c6-9e99-433b-a754-eebef419a2c4.png&sig=i6nA8gmCU4FiUy9j0RPgsgxID7f2baLuV8zG4nVvVHM%3D",
        "description": "Yo Mamma Says...Pick an adjective or topic and get roasted!",
        "gptsId": "gpt-4-gizmo-g-Xhc2KESRV",
        "author_name": "Ralph Quintero",
        "title": "Yo Mamma"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jBtfIlfnHqpMHA3PfzNv2zkB?se=2123-10-16T20%3A22%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd451f791-b0cc-418f-9293-d3830892ba70.png&sig=fVLbad4LsLizOov09t5bffwgjcHXveuRkH2HvixxGG4%3D",
        "description": "Comprehensive stock analysis and investment screener",
        "gptsId": "gpt-4-gizmo-g-W2JurotOD",
        "author_name": "Luc Allard",
        "title": "Stock Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xvemaY9E9SWj3w3lXI1WlWI6?se=2123-10-16T21%3A06%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2b84dcf8-6e74-4f71-8316-b3fb1b917b77.png&sig=HCyMhPkCkI3hjMaHwlF4jrRoj6S05MUsnjARorMeLy0%3D",
        "description": "Ancient wisdom for modern times.",
        "gptsId": "gpt-4-gizmo-g-Zz9jzDonf",
        "author_name": "Damir Kotoric",
        "title": "Stoic Sage"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QPIIeOqa5xPEV4nZuxIIsYw0?se=2123-10-21T15%3A27%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddc36046e-aeb9-43fb-b822-2f469883c7f6.png&sig=kPOZ6NaxpTG2BUjgga4KI/J4MIN4n83Hws2OFDvJMnA%3D",
        "description": "I assist in crafting clear, professional, and formal workplace emails.",
        "gptsId": "gpt-4-gizmo-g-W9tEbY6wX",
        "author_name": "Lino Sino",
        "title": "Professional Business Email Generator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bllG6sTT0uRi4Qx9Ag0uPBTq?se=2123-10-17T06%3A16%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dce5c116a-bcb9-46f6-a39c-aee25ae9d0f6.png&sig=w6Orn6ix493K2%2BFicBDpqpzK4szvviLF2B8baDJqYR8%3D",
        "description": "Expert financial analyst with concise reports.",
        "gptsId": "gpt-4-gizmo-g-ZRkaqmDXo",
        "author_name": "Think North Consultancy",
        "title": "Stock Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3P8t7xpO8PlbWlmGc8SZcUgz?se=2123-10-18T00%3A14%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Deb485037-3d86-46e9-9efc-67780acd58ca.png&sig=6ZWq%2BJ/w3yvEWeIsLnXxVQRhbSzApI5%2BOHceq2CLSGI%3D",
        "description": "Auto-image generating, Rowling-esque storyteller",
        "gptsId": "gpt-4-gizmo-g-XoURmbvwg",
        "author_name": "Luke Thompson",
        "title": "Your Story, Your Choice"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MySKCxKfBXnpKezAwEcLf2Td?se=2123-10-19T13%3A10%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5eada7b3-2dad-4506-a26c-46ccaa063ff6.png&sig=DO88zqaEFBdSti4PRn0MGLWIHgw1kGvLU/m10ohFMjU%3D",
        "description": "Accurate German legal advice",
        "gptsId": "gpt-4-gizmo-g-wKFw76Aq0",
        "author_name": "GlobalPathways OÜ",
        "title": "Your German lawyer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7EocZGNzQbd0KprowvFO0NMW?se=2123-10-17T18%3A06%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De6d0562a-eab2-433f-ac80-5ea9a913aeed.png&sig=wKSvV77gd2oqPNMlsdqkW50rAJ7iTXws4i7Cv6aw5JU%3D",
        "description": "Conductor of expert agents, specializing in OSINT. Created By Dexter Ng - www.privacy.com.sg",
        "gptsId": "gpt-4-gizmo-g-zjVOYcpoj",
        "author_name": "Donald Ng",
        "title": "Professor OSINT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kjmEP1SnRyL6oXXWJ6HZPHAU?se=2123-10-16T20%3A17%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3fe3c107-27f1-4608-a294-e5d8f1af3fbb.png&sig=%2BxnFKgBWyd2APdPWTs2oR2soUYRqFhjwj//TybgqogU%3D",
        "description": "Your expert in advanced knowledge, tailored to your needs.",
        "gptsId": "gpt-4-gizmo-g-WikWIyZkR",
        "author_name": "Marek Prusinski",
        "title": "Professor Synapse Agent"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sdTMBdYnvGkupk3plalL10Ca?se=2123-10-16T10%3A58%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db854b3ef-3107-4cf6-b46f-39a63f433722.png&sig=evFFy5QbvXqpDNRXiMkEIZKFm3rwMpBC8Xome7jkgEo%3D",
        "description": "Evaluador de actividades de programación.",
        "gptsId": "gpt-4-gizmo-g-WTcolsvYZ",
        "author_name": "Carlos Santana Vega",
        "title": "Programaci-on/off"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-eiSQ2rcQVduMZHEmhwNunvY1?se=2123-10-18T06%3A24%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D544cff0b-cb99-4269-8a50-95d69501a275.png&sig=zRD8I3K8htKdzIXS7AKfB8Hgh00iPxKS/%2Bq1D/8XyM4%3D",
        "description": "Stoic wisdom meets modern CBT guidance.",
        "gptsId": "gpt-4-gizmo-g-xi3YxFeQe",
        "author_name": "RITESH PALLOD",
        "title": "StoicGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0PxKhYjiUmWoCjXvc9JuyiLH?se=2123-10-17T21%3A55%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db8d5c7dd-01f5-4b99-9dde-c7f5f5fdcfed.png&sig=Vcsb%2BiUEAsfTA2ut7M3KZuY6jb6gvKjg3IdcH5%2BXwq4%3D",
        "description": "Bible translator with unique dialects, visuals, and KJV.",
        "gptsId": "gpt-4-gizmo-g-yBWu4tJst",
        "author_name": "Humberto S Ramirez",
        "title": "Zany Super Hero Bible Translator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-r6NBGradF4Ko0oyFrFNi562s?se=2123-10-18T03%3A15%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D625b068a-ba3f-47c6-ab65-394309840014.png&sig=DKGaDRvoS/zeMxoVYzP%2BB0e5Wi8kDaV%2BbDWM/YY7VxM%3D",
        "description": "Translates Bible verses, generates images, offers scripture versions",
        "gptsId": "gpt-4-gizmo-g-wKc3d3FXr",
        "author_name": "Humberto S Ramirez",
        "title": "Zany Cartoon Animals Bible Translator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RRe3iacb1NiecH75pQ0UdyHF?se=2123-10-19T17%3A05%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dffae53ff-84fd-47b9-aca0-749d54ea7256.png&sig=DViyLIR4R9re4XTPfYxSaR8rfqf/z4wREOi7am%2BWnkA%3D",
        "description": "Expert tech project trio engaging users to tailor solutions.",
        "gptsId": "gpt-4-gizmo-g-v1sdP1KiQ",
        "author_name": "BRANDON KEVIN RAMIREZ ROSALES",
        "title": "Project Triad"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YP8v6Jx94Pfyj3tm4NsFjS0L?se=2123-10-16T05%3A48%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da4058717-1806-4fe2-a275-5f29bc19ab62.png&sig=9mfwywO1pFh3Qz4UaGHpME618GI23vS7fjS0VwvBoTs%3D",
        "description": "Enhanced muse for richer narratives.",
        "gptsId": "gpt-4-gizmo-g-vLe46RwnZ",
        "author_name": "Ivan Crisp",
        "title": "Story Weaver"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nC0UT6paSGkJiHs4O7UUZdDw?se=2123-10-20T12%3A46%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D685ad8fd-0f0c-403b-a323-04dad5d85b68.png&sig=hh/znji5vlab19knbUMy%2BnF1ftYBCtNh4GOUpE2kCRE%3D",
        "description": "Guides through novel creation: genre to plot to writing, with iterative drafts and images.",
        "gptsId": "gpt-4-gizmo-g-vDekKWOK4",
        "author_name": "JUNG UN JONG",
        "title": "Story Weaver"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-O94cR7gdrbMA8wjELUV2QAhT?se=2123-10-16T02%3A46%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5f5bdad5-e9bc-405e-990f-5358bf3f9741.png&sig=5QwZvds3LZ%2BD7eBTdJmb68B8YQEq2ly5OkLvSdux1Jw%3D",
        "description": "Your guide to surviving the zombie apocalypse.",
        "gptsId": "gpt-4-gizmo-g-VCAsZ7EPa",
        "author_name": "BRYAN C WADE",
        "title": "Zombie Survival"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gTqx68twNOI1mn6zDuQlhUk4?se=2123-10-17T17%3A59%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8b2ec8cd-844f-4b3a-b7bc-44e4d9ffa567.png&sig=wc5tVS/xHgWDluLHB1s%2BnPNCVh8692cJImdwhQmYL24%3D",
        "description": "I generate themed video call backgrounds with a central focus.",
        "gptsId": "gpt-4-gizmo-g-ZPl6NWPNV",
        "author_name": "MR ANTONY MCNULTY",
        "title": "Zoom Background Designer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-eqTSaPYUmVIrQfbSN0WEMduR?se=2123-10-22T16%3A48%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dilus_5.webp&sig=g/kNJOATHBzt5NRZUxOa1/KtzsI4%2BWgU0AYgm50rulg%3D",
        "description": "AI for prompt hacking and AI safety education",
        "gptsId": "gpt-4-gizmo-g-v8DghLbiu",
        "author_name": "NAIF J ALOTAIBI",
        "title": "Prompt Injection Maker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-g7IGTSngjdlc3N4YNv6Ffl4a?se=2123-10-18T20%3A51%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dda1214ca-1fef-40ca-ac87-bda2ad0b4398.png&sig=H5vPLC/e8Yn10LnT1q7Da6UKltMXNhCOABkmrL73Rfs%3D",
        "description": "Creates detailed artistic and practical prompts.",
        "gptsId": "gpt-4-gizmo-g-VLJ502mjC",
        "author_name": "Teddy Pena",
        "title": "Prompt Picasso"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vitrZOHvfcaPXst3HodcrWzY?se=2123-10-19T05%3A04%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D331abf96-0485-4169-8eea-8fb052eb2bb3.png&sig=wryLHnZY/c/6uK8JPXtdFMyMb21/GkLjz6iwmkz8nP4%3D",
        "description": "I simulate dice rolls for games.",
        "gptsId": "gpt-4-gizmo-g-zzGrPWUW7",
        "author_name": "GANG LUO",
        "title": "Storyteller Dice"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sMFAmHcPMEcGgqR7VRkiiTh3?se=2123-10-17T16%3A34%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8e62afe2-6d22-411d-a2d5-66e5538de0f6.png&sig=wuFhwfJ44EM82NL8Zfi0NWiRTWJIemBbZSFKLtExk7M%3D",
        "description": "Expert AI assistant for full-stack development",
        "gptsId": "gpt-4-gizmo-g-yOMMHXwt5",
        "author_name": "Oussama Ouerd",
        "title": "codeIt"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UEI0eqlrSOIvKgJCg9Y4CxYJ?se=2123-10-19T13%3A13%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db7574649-b9e8-4085-8dfa-12e5e5380480.png&sig=3mM%2B%2BNFh1g/IfnL9xP7XLXFtB6o75kHGSGapzrYdkd4%3D",
        "description": "Mom's audio book generator",
        "gptsId": "gpt-4-gizmo-g-w6Tka9SNb",
        "author_name": "Li Song",
        "title": "Storyteller Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YlLHYGrWArEvlow3eSt6grk4?se=2123-10-17T06%3A14%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0ce72412-7019-4af2-a16a-20403c513922.png&sig=CSDfOg1PDoCbcXzvguk4TJ4e1pSLkC1FSWIv%2BtI0/Vg%3D",
        "description": "Wanna bet on your favorite sports team but don't wanna do the research, I have you covered!",
        "gptsId": "gpt-4-gizmo-g-vS7EpThUJ",
        "author_name": "C Z FANG",
        "title": "betGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-evTHHx6micYecVfFY17i9EmI?se=2123-10-18T15%3A20%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2b162f19-4bae-4a7f-9028-5913900132d5.png&sig=QldyNYfaZ3VIuvARpTFEnk8RqXYoRjz288PBpm2kMgc%3D",
        "description": "A helpful guide for understanding the paper \"Anatomy of an AI-powered malicious social botnet\"",
        "gptsId": "gpt-4-gizmo-g-WbF9uM0T4",
        "author_name": "Kaicheng Yang",
        "title": "fox8 botnet paper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Hvv9pwKwEzkp3sA9hIjkxT8b?se=2123-10-22T00%3A46%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd1b82ef8-a6e1-4adf-b5ea-2e09fba2d848.png&sig=NtWpaO1wFVVx8Dd3V2Lr7pIIu%2BroxYPtsFgB1irTCYo%3D",
        "description": "I help with sales strategies in a friendly, professional manner.",
        "gptsId": "gpt-4-gizmo-g-ycan4YLn6",
        "author_name": "Teddy Pena",
        "title": "Strategic Sales Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-X22a4BhW64Mqt8BO12NlD29e?se=2123-10-17T18%3A29%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df286afa3-88a4-4c39-96ed-40be3644dcfb.png&sig=lLPit0gW1XNek8%2BRVnfGGjE0eZfTfhau0YG8SMc2IFg%3D",
        "description": "A compassionate clinical psychology assistant, following DSM-5-TR criteria.",
        "gptsId": "gpt-4-gizmo-g-X5Z9TKH3b",
        "author_name": "Overlap Studio Inc",
        "title": "Psycho Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-d4y93jKuHs9POUfaEmp3luHt?se=2123-10-20T20%3A37%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D744d819a-6f1b-467e-ac3a-e039d091b047.png&sig=0MCMKlyR08qeRh3Bt/JAyTvdRvArDpEJV/7H%2Bv7agIU%3D",
        "description": "Speaks and behaves like a Hasidic Jew, using yiddish expressions and cultural insights.",
        "gptsId": "gpt-4-gizmo-g-ZboZsOHLY",
        "author_name": "Mozes damen",
        "title": "hasidicGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CmjqgUuIxKSZhUWgwRFYXKmr?se=2123-10-17T03%3A23%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DApple-Logo.jpg&sig=7KsHui3vIwGWe9kbPEYWx/VpbMSKqBfGg7biqhTrmOM%3D",
        "description": "Create perfectly sized wallpapers for your iPhone!",
        "gptsId": "gpt-4-gizmo-g-zri5OWvgy",
        "author_name": "Ciaran Regan",
        "title": "iPhone Wallpaper Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kMzDOmglZjoZN0jzDRdjW9Lc?se=2123-10-17T00%3A34%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1f12771d-f3cb-4d57-a843-71c36c0d82fa.png&sig=nCpv08yPRfFCLuzPbOUn0LynUrqFvzBttopxhNBoaTw%3D",
        "description": "AI tool that analyzes property images, detailing elements like fences, flooring, and appliances. It suggests improvements for space and appeal, useful for owners and real estate agents",
        "gptsId": "gpt-4-gizmo-g-zVomZq77B",
        "author_name": "Jeferson Roberto Tobias",
        "title": "Property Visual Insight"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Bmy9JGkbF9PNuerCazMTnEIG?se=2123-10-20T22%3A35%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1ea2e2a7-7ba4-4152-8fce-92ca5ea47db5.png&sig=d2By9Q2rNXQUg9%2BRsvUT5UvYScCeABrOar4Fjn1Phzo%3D",
        "description": "Practice and crack any consulting case with a GPT trained on over +1000 real cases.",
        "gptsId": "gpt-4-gizmo-g-WguHikA22",
        "author_name": "Alex",
        "title": "Strategy Consulting Case Study Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ylXN4mZxspiy244cIpswbUkH?se=2123-10-17T01%3A40%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D43b77e3a-ac44-4fdc-b785-2c356b35ec18.png&sig=jFjZzo72leE/tbW0rczllXFl9m0zmu8M1AKol4UXAyY%3D",
        "description": "I am here to help you improve your study habits. What are your current study habits and challenges?",
        "gptsId": "gpt-4-gizmo-g-ZjU7pUReE",
        "author_name": "checkfu.com",
        "title": "Study Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Qd8eGa5HGpyX39VsImux57TP?se=2123-10-16T02%3A31%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D18da5de5-b72f-4f01-809e-eafe3de3cfa1.png&sig=Ec9xmRnD8T2inpqX%2BJ4CpdOe%2Bb49eU5ClE%2BznA/Aebg%3D",
        "description": "I craft simple, clear summaries.",
        "gptsId": "gpt-4-gizmo-g-xw7lVGQPE",
        "author_name": "CHAO XU",
        "title": "Summary Hero"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-EUz3oqGlqzwSAtfj2c3P60Ol?se=2123-10-17T16%3A40%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da1eead0b-752f-4fbc-b0e6-456d9abe6daa.png&sig=lo2ya9AT%2Bt%2B4PK9uBdaCucQSKbBkhruRRViginLtK4s%3D",
        "description": "I provide bullet-point, bilingual summaries of content.",
        "gptsId": "gpt-4-gizmo-g-XctgRNLZM",
        "author_name": "Yu Hou",
        "title": "Summary Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lYaKa1M7r5lDvgyubNU63wBY?se=2123-10-16T11%3A58%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6f70f5f5-1cc8-4006-8844-11985d490008.webp&sig=Hv1hHPJ7fTdcmUhHs8bRP4puhwsjzaKfI/BqSpyBemU%3D",
        "description": ".هذا البوت موجه للمبتدئين في تعلم اللغة الإنجليزية ويقدم دروساً في المفردات الأساسية والقواعد البسيطة وعبارات المحادثات اليومية.",
        "gptsId": "gpt-4-gizmo-g-ZkRUVvKog",
        "author_name": "Sohyb Qasem",
        "title": "تعلم اللغة الإنجليزية"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dNJ62e7CcmUoI3jEYSXhUaKl?se=2123-10-19T11%3A49%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D02be6da9-3f1a-436e-8831-77ef1b56afe1.png&sig=/2gRIZQsI/GIaHtB1vhwUA/BiMsY9Hdyq3SeOoRPG3w%3D",
        "description": "وکیل-مشاور هوشمند شما",
        "gptsId": "gpt-4-gizmo-g-zk5ca7KXX",
        "author_name": "sincera ltd",
        "title": "آقای قانون"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cEFeZ0qqTMLMGcNGa8dY7DOq?se=2123-10-17T07%3A21%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6f5e81ff-0971-4786-8107-1c2efd7b61e5.png&sig=v%2B4eDApF2tOUvhFtHpKNjI2Z2xOhlfy4eyXgJMIQRus%3D",
        "description": "מסרים חיוביים לתקווה ואופטימיות",
        "gptsId": "gpt-4-gizmo-g-wNqv0KmKp",
        "author_name": "hadas adler",
        "title": "מסרים חיובים"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-crh1eKmQNTxVoILLQgePedsn?se=2123-10-18T08%3A32%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DIMG_2408.JPG&sig=EfRlqVvpHeVjVXTeCviE2ViDflajHfBxmzUqmxyHgsA%3D",
        "description": "A private programming coach from Athensoft helping you learn Python from zero to hero",
        "gptsId": "gpt-4-gizmo-g-xSJBGdqLl",
        "author_name": "INFORMATIQUE ATHENSOFT INC.",
        "title": "Python Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-80J7cFdmBSyg00aKhTFz7NHH?se=2123-10-23T01%3A57%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd27ba604-e7a2-4311-9628-135d0246de92.png&sig=5c5OqE9dQRM9VyvWbQun7oqKctdVn6gHgxPa%2B2dbtSY%3D",
        "description": "Personalized writing aid for  association or party members.",
        "gptsId": "gpt-4-gizmo-g-y9L18Vrr7",
        "author_name": "Qian Fang",
        "title": "Summary and Experience Tutor 党员总结体会导师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QZpCt51dyHc7PpJyoj4CqXKq?se=2123-10-16T22%3A26%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7a2c7e84-f897-47b8-9854-da1983f7a244.png&sig=ku8B9%2Be3l/y5GIrNInkdnnqrt154Sqtb9qyDfLOO1oA%3D",
        "description": "Guides on surgical image analysis.",
        "gptsId": "gpt-4-gizmo-g-ZM59Bz6Qe",
        "author_name": "Mingxiao Tu",
        "title": "Surgical Insight"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-w92EbXVKRi7iVhWc2IQeY7mO?se=2123-10-16T22%3A08%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3c495eb6-28e9-4a8b-be3d-13a23d2e2b43.png&sig=5ZmyqBeucyT/6SOWUaCpPWw/uF1D98UZsXsbB0BDw9k%3D",
        "description": "Your morning dose of positivity and motivation!",
        "gptsId": "gpt-4-gizmo-g-ZFX78x19h",
        "author_name": "JIN AKIYAMA",
        "title": "Sunrise Spirit"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-m1aPUbGoUq28EeiWYAygOAch?se=2123-10-18T23%3A06%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1ff8ff18-6985-4d07-a8a6-e19d90223538.png&sig=yKtOXSSKYy/DsCHZKdvMHsoMrqNuSbwLy58ddXQwgOI%3D",
        "description": "I offer fresh, concise affirmations without context.",
        "gptsId": "gpt-4-gizmo-g-YIIlsijF3",
        "author_name": "Gregory DeCarlo",
        "title": "Sunny Vibes"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Hp8ZfGjuIgtPPgez4BrzZdi3?se=2123-10-21T18%3A16%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddf6b5d7a-9565-49e6-9221-10f077acde0e.png&sig=LUIOQ1uvxURSCE1ppUdmqOMFT1NBDh5UeViCuj9UAIY%3D",
        "description": "Casual, witty, and patient customer support expert with web browsing capability.",
        "gptsId": "gpt-4-gizmo-g-z9q7tyXl8",
        "author_name": "Teddy Pena",
        "title": "Support Star"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1M9BuhNy6OA3nBy7ZmvzhmrV?se=2123-10-18T00%3A42%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D148238e2-6bff-40ff-a5c5-b284ff9adb8a.png&sig=6qBNlyo7bxCZ/NYWiuZXO5AxiEkOXJsfa4yXixNNMZ8%3D",
        "description": "ブログのアイキャッチ画像をタイトル付きで作ります（日本語OK）",
        "gptsId": "gpt-4-gizmo-g-x5nOvW9C3",
        "author_name": "MOTOKI YOSHIHASHI",
        "title": "アイキャッチジェネレーター 1.8"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aNQcHsgae8HLFxjapEGDknmB?se=2123-10-17T04%3A53%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E3%2582%25A2%25E3%2582%25A4%25E3%2583%25BB%25E3%2583%25AF%25E3%2583%25BC%25E3%2582%25AF%25E3%2582%25B9.png&sig=/a8TyaIgRIDVA992wLrOy7P/6mZ3zWi0VMY876Eph/M%3D",
        "description": "I propose job transition training programs.",
        "gptsId": "gpt-4-gizmo-g-W9ubC3E9V",
        "author_name": "YOSHIKUNI TAMURA",
        "title": "アイワークス・パスポート（試作1.00）"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ExtR3UwPQdeTtTQ52lIFC53N?se=2123-10-22T03%3A45%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D82b0fbf2-7f17-44f5-9a79-07b146014ab7.png&sig=j1At%2BMWdo9NNZUhK6caMBql5lS1opGb5yT29xH4kHrU%3D",
        "description": "I'm a virtual tennis coach offering tips and strategies to improve your game.",
        "gptsId": "gpt-4-gizmo-g-y5lLFNRTZ",
        "author_name": "madhu r",
        "title": "Tennis Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-h675FT6PmrYb6EHxIPhqFxvy?se=2123-10-18T06%3A51%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E3%2582%25B9%25E3%2582%25AF%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%25B3%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%2583%25E3%2583%2588%25202023-11-09%2520090835.png&sig=Y1P8Oo8eqIlIby8ByjIsc%2B8TkzlD8S8g4WdSZSQ4ypw%3D",
        "description": "YouTubeコンテンツに特化した高齢者ケアのビデオ編集とスクリプト執筆の専門家。",
        "gptsId": "gpt-4-gizmo-g-zkv84CjwN",
        "author_name": "HITOSHI NAKAE",
        "title": "老後のあんしんアカデミー要約GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ojRXnzHz8s0lM5dWC2ttxClK?se=2123-10-22T16%3A39%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D23ff24c0-9895-4705-a90f-800e968ee5ff.png&sig=jeNF/S0Em3M6dgYdD3jajqTsLLC5ZKauINKWHxL/JWg%3D",
        "description": "Career expert for Chinese students in the UK job market",
        "gptsId": "gpt-4-gizmo-g-Zbvgeyzs4",
        "author_name": "Shentao Xie",
        "title": "英国求职"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hPt66CGPgMu9hOoS9o3COHw2?se=2123-10-18T10%3A50%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D12b3fb40-2d8e-4b08-b2e0-0610db9218cd.png&sig=3b%2BO46FGRQEWzad12Madamwfdk42bY3r1u7nl5X9JLY%3D",
        "description": "Generates and displays QR codes from text.",
        "gptsId": "gpt-4-gizmo-g-Xd5Oo6eFC",
        "author_name": "BO CHAO JIA",
        "title": "Text to QR Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YQYnPji0x8Yv97fZvwbyOR12?se=2123-10-18T09%3A06%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0b80b455-e801-4061-ad56-9934182024e3.png&sig=eRNrqG2lkV1%2B7kwGMcZYHZQeVsJkSgj/F7rdjRBVSx0%3D",
        "description": "Assists in creating hand-drawn style video storyboards from scripts.",
        "gptsId": "gpt-4-gizmo-g-UYTdnmUnr",
        "author_name": "Tom Jack",
        "title": "视频分镜画图大师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UnfWbdwm7K3rxmyYBlkWPCxh?se=2123-10-18T06%3A43%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D78d1ec2e-7caf-47c2-84f3-076e25213b2f.png&sig=i7TG05jIYohhZzCjpkxdLmSyiTceWK3d0q%2Br3JCL3iU%3D",
        "description": "Write like Shashi Tharoor",
        "gptsId": "gpt-4-gizmo-g-UxQylW40H",
        "author_name": "Albert Dali",
        "title": "Tharoorify"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DotcBtqk31iP9TDNTO23HNMh?se=2123-10-16T18%3A20%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D64d221f2-be78-4046-a914-96be1b9c8908.png&sig=3hUhoQ0SsIb4wVAZkgfa6YFpVbV5k/Zwbena8jxpQlU%3D",
        "description": "Strategic guide from, I, Sun Tzu",
        "gptsId": "gpt-4-gizmo-g-vfTG8Royt",
        "author_name": "Amy Suto",
        "title": "The Art of War"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aS91KDVk165tQWCiYVq4j4Ze?se=2123-10-17T20%3A27%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5fff8e11-3090-4241-bf62-0bc6bb8f7897.png&sig=FZGbMOggc6D7SIIDODGoYpcn6gh8JlytH4/N8VSYnTY%3D",
        "description": "子供に適した英語の言い回しについて解説！最初にお子さんの年齢、性別を入れてみてね！",
        "gptsId": "gpt-4-gizmo-g-W9Ce7gK9C",
        "author_name": "Shinnosuke Ota",
        "title": "赤ちゃん英会話"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-agMZBAnSDtW89AgJtVUkbOVT?se=2123-10-17T11%3A14%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1d724c73-d5c0-4846-baa5-b6d1de7552a9.png&sig=KzrdCMAQ4XE2jIvwI9M5o3x9QWdS035RP7XVjywnWKM%3D",
        "description": "I am 迷你庄子, sharing Taoist wisdom in Zhuangzi's voice.",
        "gptsId": "gpt-4-gizmo-g-ylcd344Zb",
        "author_name": "张启超",
        "title": "迷你庄子"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-U7sdqbsoGR0zEeNwGYh8qwq2?se=2123-10-17T03%3A10%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcf5611c9-9a83-49da-a6d5-55f626565982.png&sig=mU0J8V3wiRKSkwRKnDwSCk9XLIzUaxaqaPD9JmUPeRI%3D",
        "description": "He is your best companion who will recommend snacks and recipes based on photos of the sake.（酒の写真を元におすすめのおつまみやそのレシピをこたえてくれる最高の相棒です。）",
        "gptsId": "gpt-4-gizmo-g-wtXKKfXcb",
        "author_name": "TamaChan",
        "title": "酒カスの友〜Sommelier Snack Buddy〜"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TBwKVLOIg5OTry6ZuLLEQa9Q?se=2123-10-17T07%3A00%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dee3c4c00-fd63-497c-a88b-4a74925af335.png&sig=w/iQhPO2C9PE1wdYBV3C4k1%2B1Z5M23QU1Qi5PnEJCGo%3D",
        "description": "我是资深演讲人，提供逻辑清晰的演讲稿结构建议，根据详细的工作流程来指导演讲者，为其提供更具针对性的建议。这套建议可以根据不同的主题和听众背景进行调整，具有很高的适应性。",
        "gptsId": "gpt-4-gizmo-g-YqiUkLauT",
        "author_name": "ff c",
        "title": "资深演讲人"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vavPjtwwYMGb9cAohGMPMHvw?se=2123-10-19T03%3A10%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd9bcac7d-0194-4a52-a70e-3c116eac4a18.png&sig=7Bqlb5oR5WuDvGxxkhZHTsEo7%2Bb3YOLLSvbGy2wi6DU%3D",
        "description": "I have seen your future.",
        "gptsId": "gpt-4-gizmo-g-w5sa94Hbq",
        "author_name": "Robert Dearborn",
        "title": "The Fortune Teller"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aFyE2qv8uCswiJ46iKT028V3?se=2123-10-16T18%3A17%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dde0a9e3d-6bbe-4065-bcaf-067dc4b63315.png&sig=DFNggS17CiKa4YHCD%2BUe9hQ4g7mR9yWzvJ4Zggw9mIM%3D",
        "description": "Your immersive DnD guide & artist",
        "gptsId": "gpt-4-gizmo-g-XxaPtqXda",
        "author_name": "Olli Andreasen i Lagabo",
        "title": "The Dungeon Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2p5u1I9v8J4BIsqEgrSgK6pS?se=2123-10-20T12%3A58%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E8%2593%259D%25E7%2599%25BD%25E8%2589%25B2%25E6%259E%2581%25E7%25AE%2580%25E5%2588%259B%25E6%2584%258F%25E5%258C%25BB%25E7%2596%2597%25E5%2581%25A5%25E5%25BA%25B7%25E5%25AE%25A3%25E4%25BC%25A0%25E8%258B%25B1%25E6%2596%2587logo%2520%25282%2529.png&sig=vd2yHOF%2BS0n59l9M1e5OksvehmpxYVyJ1h6IbitYOoo%3D",
        "description": "解答关于领英开发的一切问题！帮助外贸人最大化利用领花平台开发优质客户！",
        "gptsId": "gpt-4-gizmo-g-xAhFp6zAc",
        "author_name": "wangshaoyu",
        "title": "领英开发助手"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NSPtyDy7M6irLETPpfUD3uU5?se=2123-10-19T01%3A03%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D31f30584-01fd-44e4-8b5f-ca1c344b5731.png&sig=7TD2tcYRQRy9ZqoEL8h2rC74oCrRrhBWwRv3aX48MXA%3D",
        "description": "Crafting tailored QMAS recommendation letters for diverse professionals.",
        "gptsId": "gpt-4-gizmo-g-VwGPRsvIm",
        "author_name": "jack Sin",
        "title": "香港优才"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-G8sNdu18O1FfGqXZml7Ndlg4?se=2123-10-17T13%3A12%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7606f488-0d68-441e-bedf-b9b6106e5bba.png&sig=nqtsyQu1T%2BDJNss1/yz25tV8i8/LERovIY2cgPBuf2Y%3D",
        "description": "Specializes in tailored travel plans across China.",
        "gptsId": "gpt-4-gizmo-g-w93rncgPX",
        "author_name": "sg",
        "title": "驴友助手"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TxMWX7EN0qYthG8Q3IIdj9gc?se=2123-10-17T03%3A07%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5044c713-9556-477a-aa17-95e2056bd309.png&sig=cMrFu3oxji5bIK//vLcYWeYFIwNin5tIzKvHA14efpg%3D",
        "description": "レストラン探索に専門化した日本語対応GPT",
        "gptsId": "gpt-4-gizmo-g-yEDiYuY5O",
        "author_name": "AKINORI OSAMURA",
        "title": "食探ガイド"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wUsq3EYXBUCIWEsMZFEEtDnH?se=2123-10-17T05%3A54%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6209705c-5435-4ad2-82f7-c0a5a49444ab.png&sig=pVUnwUgwL%2B/wCmggxNmeL66p/4RsxVt2iBsmmsMjPTc%3D",
        "description": "Are 'aliens' just subterranean Earthlings living in VR pods?",
        "gptsId": "gpt-4-gizmo-g-ycGVXm7xh",
        "author_name": "Greg Fodor",
        "title": "The Intraterrestrial Hypothesis"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1VVY5Pisqqwc7uNsfHhUm7J0?se=2123-10-17T10%3A23%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6fc43bcb-e327-40f5-a973-d10572dd3f69.png&sig=Ktlcf8KGcf176Uxt8lmJYUyAAFiHHeyGagWIQj5xGCM%3D",
        "description": "I'll provide you in-depth logical analyses with cross-domain views",
        "gptsId": "gpt-4-gizmo-g-zBKJawBCx",
        "author_name": "Marco Dong",
        "title": "The Intellectual"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Wv7nJXX2YKP3TTh6UbeZb3LW?se=2123-10-18T03%3A21%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbe31e14d-d6d4-40b7-a69e-7807ec00b870.png&sig=ltRXME1OuzytBcDHiiEZMQLhZID2Kvg2lvMQMbMbQJ0%3D",
        "description": "A GPT remake of the classic ZX Spectrum text adventure The Hobbit",
        "gptsId": "gpt-4-gizmo-g-uZa3QPPTT",
        "author_name": "Ronald Mannak",
        "title": "The Hobbit GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Kp6c0dVfxbyAfHC7Gmv0UxQL?se=2123-10-18T14%3A48%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D819771a1-6a9f-4364-bab0-fc5662a22fdb.png&sig=iorOSRyM59ZR1nlmj6thqY5OiBj7Bhzvgw2poFbrV6E%3D",
        "description": "Guide for healthcare innovation process, no medical/legal advice.",
        "gptsId": "gpt-4-gizmo-g-vtscYSw55",
        "author_name": "Rubin Pillay",
        "title": "The Healthcare Innovator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lf7kLlMSICaZNKmhnm4N9ffI?se=2123-10-19T06%3A08%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D12e47e38-9cee-4ec9-a8e3-84d959995952.png&sig=S7eEVpU1AJyfq4Mhk00g%2B//pouh5jrzu4EKClQYOf9k%3D",
        "description": "Accurate religious text and information expert",
        "gptsId": "gpt-4-gizmo-g-ym8P2UZYI",
        "author_name": "Elias Yi",
        "title": "The Holy Books"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VwNnKyJ3oVun8SkFmUQk7JOE?se=2123-10-18T04%3A13%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2416f44e-3da2-4224-96b0-43d96219842c.png&sig=AaAHw5a8eb1iKx76GGYh30w%2BM8WgmNdJVf4hGsBhbnY%3D",
        "description": "带有行话用法的魔兽世界风格的中英翻译器.",
        "gptsId": "gpt-4-gizmo-g-WvF2I6ohe",
        "author_name": "ai.aktgo.com",
        "title": "魔兽翻译官"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HaEo3MbfXullvi5AuhfnBj4M?se=2123-10-17T20%3A12%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D019b8bde-1b87-4d8c-a35b-fa6bc9c7c6a3.png&sig=qqA6ptkwD0igwRrS4FI5AeEm5dHW5K/TMjLSJSMHv/Q%3D",
        "description": "An assistant for mompreneurs balancing business and home.",
        "gptsId": "gpt-4-gizmo-g-VZdtHZCHm",
        "author_name": "Nadia Ben Brahim",
        "title": "The Mompreneur"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1wOvPrhjA7fwi9P37Tsd4M2K?se=2123-10-16T21%3A33%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1699540341945.jpg&sig=XGv3OcPsfqjA%2Bhy5pgsqSC%2B8vL/EvazTZfETz2UwNU8%3D",
        "description": "The Actioneer AI Startup Coach is your trusted advisor in the startup journey, offering focused guidance on your most pressing tasks, sharpening your pitch, and refining your business strategy for success.",
        "gptsId": "gpt-4-gizmo-g-yaSo0YdUb",
        "author_name": "Actioneer",
        "title": "Actioneer AI Startup Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gHX1m7KOSFbsuwNxIrDiBPDa?se=2123-10-18T03%3A25%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D73ed9495-aa9e-4c9f-8fda-816a8526c1ab.png&sig=WeKZ%2Bw8feE9j9jmLaqyyFqmOt/9DbnTaHKr0aLx2a9M%3D",
        "description": "\"I only do translations, nothing else\"",
        "gptsId": "gpt-4-gizmo-g-WZjelkFDn",
        "author_name": "MATSUI KENTARO",
        "title": "Academic Translator (to English)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IUOtJAhicpNO9MSFwhOhyuZO?se=2123-10-17T08%3A53%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da15ca53d-905b-4d56-87b2-e6db2043a2b2.png&sig=oLO7nezVDQyTu%2BL46Lnb2yvjeY7EBp3pwVHYBmkKGgM%3D",
        "description": "I play tic-tac-toe in a fun way!",
        "gptsId": "gpt-4-gizmo-g-xORngAjtB",
        "author_name": "Kovetskyi Mykhailo",
        "title": "Tic-tac-toe"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-olloEAX2MM6oIPSUEVOr2Idr?se=2123-10-17T20%3A45%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De99e9314-fe0b-41b6-bf4d-12649344db24.webp&sig=Wkx%2BJLvIC%2BtZV64IKxRKrrGDPM/nn5qbIbwLj%2B56lA4%3D",
        "description": "AlphaZero researches the latest news and delivers it in a rap.",
        "gptsId": "gpt-4-gizmo-g-VpqviDJGp",
        "author_name": "Chad Peterson",
        "title": "AlphaZero Raps the News"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-A3eOAJX4d74G61ca7yNfuuJf?se=2123-10-17T00%3A22%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9bb80a65-7301-4c4e-a4a0-4411e007a093.png&sig=KwkGZvIXdnsh9ElY99IvNJ1EQbWvcKWdiEwuYRm5YX8%3D",
        "description": "I'm your expert pair programmer for the Titanium SDK, Alloy MVC, and JavaScript helping build cross-platform native apps.",
        "gptsId": "gpt-4-gizmo-g-ZNwI6zmBi",
        "author_name": "J Kneen",
        "title": "Titanium Copilot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bYRpUxD0T2KQMEXOmPgYno61?se=2123-10-17T21%3A21%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd5c899d9440e12a246f50090451b117332303d9ec3d3aaf06afa6e2c8e0af98e.jpeg&sig=3sq2MeaE4svE3yafSbrFZbNXAo/IlZPcDAKlIcKFfiY%3D",
        "description": "Expert on Tom Thomson's mysterious demise",
        "gptsId": "gpt-4-gizmo-g-xcowvkCpC",
        "author_name": "Timothy R Bouma",
        "title": "Tom Thomson Mystery Expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5KWh3jlBqim8ioYS5aXDPY7r?se=2123-10-16T00%3A44%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4f68dfe5-4cf8-4e44-b51a-58ffa281f099.png&sig=tYTVqGxNcPRbn6YpBlt8GpTNZQ0TmvJuK%2B%2BvzJEzj9c%3D",
        "description": "Toronto Bylaw Specialist",
        "gptsId": "gpt-4-gizmo-g-UYyKX4CGp",
        "author_name": "George Bell",
        "title": "Toronto Bylaw Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jprSb9wwBK5oE2gxs8qufR5s?se=2123-10-17T16%3A23%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DUntitled%2520design-7.png&sig=TyzDrW%2BjuHU5MctuwLMdo4672KVGFGwInMkn2AO7Pk4%3D",
        "description": "Find inner peace on your spiritual journey with guidance inspired by Dalai Lama. Learn techniques to cultivate happiness through growth, mindfulness and non-violence. Discover compassion and gain perspective for harmony between all people.",
        "gptsId": "gpt-4-gizmo-g-wH7sGuLch",
        "author_name": "Nicola Dussin",
        "title": "Ask to Dal-Ai Llama"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LC7fEsToktERYZQCfgVdAYil?se=2123-10-18T02%3A11%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dartsynthlogo.png&sig=3sUmB70XAx3ABch%2BucQuj13PTUrg%2BNg2acpVQf7OHrQ%3D",
        "description": "Type \"go\" to generate an image based on two randomly selected artists' styles. Type \"again\" to generate another image in the same style (or type in the style ID to return to a previously created style). You may append \"horizontal, vertical, or square\" to g",
        "gptsId": "gpt-4-gizmo-g-vmtRrl5Ra",
        "author_name": "Shawn T Adams",
        "title": "Artifice.Ltd's ArtSynth"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vxLj3aORige9NbApT5nwpDsl?se=2123-10-18T13%3A11%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-11%2520at%252016.10.37.png&sig=/hiUI6Yb0gOCi4L/aGzynxlwBeL/GiX3gEJWaVdx8W8%3D",
        "description": "Turkiye'nin Kurucu Lideri ile sohbet etmek istemez miydiniz?",
        "gptsId": "gpt-4-gizmo-g-vxEK8zbPK",
        "author_name": "Oguzhan M. Cakmak",
        "title": "AtaGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rDDuQrbgVT1SoTq91PLhSgQP?se=2123-10-16T14%3A40%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-09%2520at%252014.13.13.png&sig=6fyuq8WJWl2Y5wD7JPiYhUCEyKPIDFQ0RY5P%2BnxP0qg%3D",
        "description": "Guides visual advertising campaigns from concept to execution, leveraging design skills and marketing knowledge.",
        "gptsId": "gpt-4-gizmo-g-v9fT5bST5",
        "author_name": "AI Advantage",
        "title": "Art Director"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZJeilyEnox7UahwD9aSTpL3y?se=2123-10-16T22%3A33%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7113a708-c90b-4e77-b7b2-2efe9b598f05.png&sig=nU9V8fn9ZH0AxCurnwS%2BTP4g%2BqMs7TvPs/gBimkHNxY%3D",
        "description": "Matching profiles in transhumanism based on market targets.",
        "gptsId": "gpt-4-gizmo-g-vokntYGm8",
        "author_name": "Peter Xing",
        "title": "TranshumanGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-N0KtJcyDo92bieqwtOWSiw3B?se=2123-10-19T05%3A00%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4a0329b7-66ce-44a4-bb5e-b3e1b02a1d5b.png&sig=aZqmVAK3%2BvzBFUuYLCHzaSKcKOhqBO1S4B8Pph9lUTw%3D",
        "description": "Provides in-depth TCM advice and remedies.",
        "gptsId": "gpt-4-gizmo-g-z9PgCO6BU",
        "author_name": "CHENGGANG WU",
        "title": "Traditional Chinese Medicine Diagnostician中医诊疗"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-l2PO4Bo0aqmMVhWKPLLnYE0j?se=2123-10-21T18%3A33%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2997fbf8-c082-4867-b71d-c7f115583568.png&sig=kdjn6Mbs79/f0rnOuIuCS/c1HdGsGn7Sv7LbAZyS4kE%3D",
        "description": "Assists with daily trading activities, focusing on market trends and data analysis.",
        "gptsId": "gpt-4-gizmo-g-YSCVx7sae",
        "author_name": "Matthieu VANHILLE",
        "title": "Trading Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BdZdLoSGr5TtAXyIl0UP4wS2?se=2123-10-17T09%3A18%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6d637460-af0c-4356-a864-4f6599f3757f.png&sig=I%2Bw48q9uVPkmaslqFinGqFZcUDjTqKM0OHAQe5znNT8%3D",
        "description": "BROcente knows a lot about restaurants, just say Hi Bro!",
        "gptsId": "gpt-4-gizmo-g-zMHiHMT6X",
        "author_name": "Carlos Alberto delgado Collantes",
        "title": "BROcente"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Gl6M50KukNZU6rMhe6geJrbM?se=2123-10-17T08%3A08%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De567f231-f026-4fc2-9fd8-3e0659a95966.png&sig=R9XyQSangfeyYv/jWkUECWtzszG2o5qTibN6UQpA11w%3D",
        "description": "I craft real-time travel plans!",
        "gptsId": "gpt-4-gizmo-g-wjzIMe6ow",
        "author_name": "江捷 陈",
        "title": "Travel Agent"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-M5kp5K1ODTshEbdXETBoFrLt?se=2123-10-20T14%3A44%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8e2cc895-a983-4439-b408-db9bd6401acc.png&sig=Odc6%2BcmIGPHQSnCjnHaZt9SB6trvuFq7VpTEOqVHxtA%3D",
        "description": "Your expert language translation assistant.",
        "gptsId": "gpt-4-gizmo-g-ywryKZLbs",
        "author_name": "Fei Hou",
        "title": "TranslatorGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zFuykwhv7J10Qg4Psqmwn76H?se=2123-10-18T07%3A05%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dca6e7af8-9514-43e3-94a3-cc542c30d39b.png&sig=OgBa2BPRqyNZ%2BnL8BWQ2jU2Kfcv7wfoV2wNF0q5v0sc%3D",
        "description": "BibleGPT is an advanced artificial intelligence system specifically developed to guide you through the teachings of the scriptures, providing a comprehensive and interactive learning experience in understanding biblical texts.",
        "gptsId": "gpt-4-gizmo-g-VPb0n90mC",
        "author_name": "Michael Shimeles",
        "title": "BibleGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jKBJjjwFZcmSNgik3AhfVod7?se=2123-10-20T16%3A27%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbhupendra-jogi.webp&sig=3cxE5XXsIueLUVgmhlAioABH1HE3ZJG8IHMJHoNeICE%3D",
        "description": "Naam : Bhupendra Jogi",
        "gptsId": "gpt-4-gizmo-g-WxEyIBs8i",
        "author_name": "Pravin M Singh",
        "title": "Bhupendra Jogi"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-A0dcSz9xTqiTnBAfKKW7mW7X?se=2123-10-20T09%3A50%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2af13aca-39ab-42eb-9c6d-723f5685c70e.png&sig=Nkyzk/OetI9baADZiDA%2Bw3u3zTr4CWCxHaV5NgAUdEk%3D",
        "description": "Your go-to guide for savvy travel tips and tricks.",
        "gptsId": "gpt-4-gizmo-g-Xvx4GqYT7",
        "author_name": "Christina Kumar",
        "title": "Travel Hack Expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YoYv4mHmstgS3HLmGy3T4k32?se=2123-10-21T13%3A06%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D478fed6c-6318-4570-887d-416565237751.png&sig=EfAKXhlsXWGAD6iApCn1XmFvErPGV6nnc8kwp6rt22U%3D",
        "description": "A travel planner offering activity and restaurant suggestions",
        "gptsId": "gpt-4-gizmo-g-w1xDCzwgH",
        "author_name": "Emma George",
        "title": "Travel Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D3vqRaokRKavvetPx8mFuwVi?se=2123-10-16T21%3A49%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D13a99db3-822c-4949-a148-912794bd7d76.png&sig=ycclGJ7PWuJCXDSUVgluvudzxQqT%2BnpN28v3uKRbE1w%3D",
        "description": "Your personal travel planner.",
        "gptsId": "gpt-4-gizmo-g-xwdDJga0f",
        "author_name": "Adewale Kayode",
        "title": "Travel Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lWsBt3o3Wy7fsLp7ULZMLrCv?se=2123-10-18T07%3A06%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D55e325bf-06ea-412b-93d8-3fbd0e341dda.png&sig=8/QGLQM/pwSX%2Bv7/tmOnYhADJtB8tIKQ/I%2BKPjoRibg%3D",
        "description": "Unlock Quick Homework Solutions with Detailed Source Insights!",
        "gptsId": "gpt-4-gizmo-g-vIdjUQ2b4",
        "author_name": "Patryk Chorzepa",
        "title": "BrainyBot: Your Fast-Track to Homework Solutions!"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DE9OG4uevhrys5MezgTAuIIN?se=2123-10-20T03%3A26%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D14287043-22e7-43ac-b17e-5e021c78296e.png&sig=FdetCymN6bJaFMj18g%2BkBIyg9mqU/mpHR%2BR2/1AaGhM%3D",
        "description": "Enthusiastic Travel Planning Expert",
        "gptsId": "gpt-4-gizmo-g-veMpTb39A",
        "author_name": "dou mai",
        "title": "Travel Planner"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Y37PS4fMMvdxN5BrEtI1U6di?se=2123-10-16T19%3A44%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D64b95342-dcc2-406f-a3d4-232c9ecce98b.png&sig=Nvz8u6wmImxP4AA3X3uHTdiPdoYIT3Wn9z0E1m8BjL8%3D",
        "description": "I'm your negotiation coach, inspired by Chris Voss.",
        "gptsId": "gpt-4-gizmo-g-vHPs6Whuy",
        "author_name": "Karl Waldman",
        "title": "TE - Tactical Empath"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tuQU7cMEnZM1YFWt2K6FRmgv?se=2123-10-20T10%3A05%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D46e4bc4d-f9d2-4d27-95ec-fb371b7b1509.png&sig=/8gJaD4wJcv5kAUn%2BME/TSIlXQ2/g%2B3Svr6m3if6Jx4%3D",
        "description": "Quick and relevant synonyms and word suggestions",
        "gptsId": "gpt-4-gizmo-g-vehf9YyuI",
        "author_name": "Christina Kumar",
        "title": "Synonym Specialist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zXiS9mx9NNqyHnuxXXVNj2XO?se=2123-10-17T17%3A00%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7d39c837-32b8-493b-9914-e11aecd25b41.png&sig=/9zv0M0Ilh50Ng%2BS4eTlMWIC1dPfrDQNaBCV3EbI73U%3D",
        "description": "Smart Summaries, Swift Understanding",
        "gptsId": "gpt-4-gizmo-g-ZOL2lvhpw",
        "author_name": "Daniel Goodman",
        "title": "TLDR"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-P9qZ7XpTI5RNlpGhFBt6E6qc?se=2123-10-17T10%3A14%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1af5e0b1-2ca1-45e5-80b8-ab1841621194.png&sig=bSH/L2cOI7gUWSA3idYiCWvFRBz5S8qhov7pOK5D9ZI%3D",
        "description": "与えられたお題から丸顔黒髪ショートの可愛い画像を生成します",
        "gptsId": "gpt-4-gizmo-g-zDf1s5Wv8",
        "author_name": "YUYA TAKEYAMA",
        "title": "丸顔黒髪ショートメーカー"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vLpJJ7AUwxWaURfeQoZgWWcK?se=2123-10-17T08%3A21%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8f5edb83-2100-4e71-a843-8127b416d301.png&sig=NqbPkg3RUI1QLoLGL5FYEcuRDlpbsQ3GZvxMt%2B/G2M0%3D",
        "description": "我是一名人生目标发现顾问，通过个性化服务，帮助用户发现和明确他们的人生目标。通过整合用户的兴趣、活动和期望成果，确保用户能够有效地识别和追求对他们最有意义的事物。",
        "gptsId": "gpt-4-gizmo-g-vEjwu3xrI",
        "author_name": "ff c",
        "title": "人生目标发现顾问"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Rsv995XCpFc9X06GzWPNOkbY?se=2123-10-19T00%3A59%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-12%252009.53.31%2520-%2520A%2520hexagonal%2520digital%2520badge%2520with%2520the%2520top%2520vertex%2520pointing%2520upwards%252C%2520prominently%2520featuring%2520a%2520large%2520letter%2520%2527Q%2527%2520at%2520the%2520center.%2520The%2520badge%2520should%2520have%2520a%2520sleek%252C.png&sig=5N4xpxtZcw6uPYhowAVZWwAvXmc49T0i2A2/12Rk/qI%3D",
        "description": "Formats Quizlet quizzes for elementary English and Japanese 6th grade level.",
        "gptsId": "gpt-4-gizmo-g-XK9BK45K5",
        "author_name": "大橋　陽介",
        "title": "Quizletに出力できる形式にしてくれるGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-11kxwrIdaExSlO6AyhaHtyFH?se=2123-10-17T05%3A59%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd7a4212c-a750-4f49-877e-2c1026f25aee.png&sig=jMIqt7yI4sBeEr/bzHOacpte%2Bg6AUss/Up8IIZoHAGg%3D",
        "description": "我是个性化K-12课程制作者，时刻准备为教师提供从确定教学目标到教案文档输出的全流程支持。该工具负责自动生成详细的、符合用户教学标准和学生需求的个性化教案。通过智能分析教师的输入，该工具能够精确地识别学生的学习水平和需求，并供给教师具有实用价值的教育内容和教学活动的建议。该工具应主动与用户交流，确保教案的输出不仅符合教育标准，而且能够个性化适应每位学生的需求。",
        "gptsId": "gpt-4-gizmo-g-w9iGAQsKt",
        "author_name": "ff c",
        "title": "个性化K-12课程制作者"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hvWHsPSFsZBKinxxrWIrzk5k?se=2123-10-17T06%3A32%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db067c6a4-58d7-4e2e-a676-3fa99ece5e8e.png&sig=mcdng4LjoUQwnrcwX/jUTo8OWflcNsnmIaH6kryGQrY%3D",
        "description": "Targeted Quiz Generator with Sequential Questions and Badges",
        "gptsId": "gpt-4-gizmo-g-X1xe2GH9z",
        "author_name": "Nicholas Coronges",
        "title": "QuizMe"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Mm4EbnpUEsJkuI3nbBmOGfix?se=2123-10-22T01%3A49%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7a877b98-f554-4802-9e9e-b32fda16859d.png&sig=PARVtTae4BVxqntaJsTjCY0xATztlMvpaYKr7VZVN4c%3D",
        "description": "Guide to Chinese mythology, focusing on texts and illustrations.",
        "gptsId": "gpt-4-gizmo-g-zN1Deh6Wd",
        "author_name": "LEI YU",
        "title": "中国神话故事"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-niCpL14mMKBFt1yqeyKafUGF?se=2123-10-17T22%3A32%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6fef2999-9450-45e7-91db-ca68ed869558.png&sig=ruU3LFzHiHE70gkMCDwFvMhg3EQqKl2yxeS4iHbwk8I%3D",
        "description": "Specializes in PlantUML diagrams with structured API and microservice groups",
        "gptsId": "gpt-4-gizmo-g-WWbK13ZGi",
        "author_name": "Panagiotis Koletsos",
        "title": "TMF Cloud Diagram Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-j6weLC3ieIWs0xVbFx2aRQH6?se=2123-10-20T18%3A59%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc72c8492-24ff-4179-a08c-f08cc62e8aee.png&sig=ELVOwF9fAcYg2tawd/zlQNsPDlirkTvmplWiY8vq/yY%3D",
        "description": "Whimsical and philosophical guide to party game creation.",
        "gptsId": "gpt-4-gizmo-g-XHuvwutSl",
        "author_name": "thomas key",
        "title": "Tabletop Tactician"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bvdCTJrdfWbR1Q2qejr04XO3?se=2123-10-16T23%3A12%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4dee9f6e-8623-4831-8514-ece5a6517912.png&sig=LbsZbRGgdJLf5VTK80RzUYm/XZ/X12tI2Nx/2q/wOJM%3D",
        "description": "Family-friendly chats with Santa himself.",
        "gptsId": "gpt-4-gizmo-g-ynMzwNzuK",
        "author_name": "Brian Hennekes",
        "title": "Talk with Santa"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3tClbWEae4RtvpmoqjY8Xm9c?se=2123-10-18T16%3A13%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddaeb555e-8ae2-4f6a-a026-0c450c4958d1.png&sig=Z45Qf%2BDz3wir33LbF4o4XrpyJTejFttJIKAHiXgY8yI%3D",
        "description": "Expert in top 10 actions for success in any topic.",
        "gptsId": "gpt-4-gizmo-g-ZvJRlREIg",
        "author_name": "Li Yan",
        "title": "关于任何事情的10个行动清单"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5UFwqUFIaLTD7UA3hDoY3xVa?se=2123-10-17T07%3A42%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D651961b3-ce28-407c-bf90-d91fbe866c49.png&sig=fYxVe6sLehwYdYvEnBdqLYcTQW9f1q7u962w5LNA7WE%3D",
        "description": "Expert in TailwindCSS for front-end development, providing code examples.",
        "gptsId": "gpt-4-gizmo-g-vZktiVWOj",
        "author_name": "Kui Yang",
        "title": "Tailwind Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nuTtZyRqRiJZc88xzHhjPKeq?se=2123-10-17T07%3A15%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D87e06b95-1620-4447-9913-71009eb7eeea.png&sig=FIKnRm4bkjmE/prMrsqj646VWVnC0y0irm79624wY0k%3D",
        "description": "I'm a Tailwind CSS expert ready to assist with your coding!",
        "gptsId": "gpt-4-gizmo-g-ZBXcOuAqi",
        "author_name": "Gerardo",
        "title": "Tailwind Helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-A7HZLCU6yNqh7axj9enAorZC?se=2123-10-18T19%3A24%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dafae96b6-fdf2-4437-b397-9b74b4d789d7.webp&sig=s/4i5AlT1CdKxopPGmZ9uy31eue9%2B/D6q3k7wS2Do8M%3D",
        "description": "A passionate and fierce tennis coach, offering training plan, advice, tips, and guide you through the process of improving your game.",
        "gptsId": "gpt-4-gizmo-g-w8bQo2KMl",
        "author_name": "Lei Zhang",
        "title": "Racket Rebel"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VENioC3xEHMzCWkC9mD3A5rt?se=2123-10-19T02%3A34%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3a8b71cf-4fa5-43a3-96e7-795811989527.jpg&sig=/0zFyPiIyU3Q0TbeQK2O/muudMlP9FAacb5FRMNZpNo%3D",
        "description": "Generates unique RPG characters for table-top games with bios and portraits.",
        "gptsId": "gpt-4-gizmo-g-XUSmp8A4X",
        "author_name": "Gustavo Kopit",
        "title": "RPG Character Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XKltUznTEnf00rFQw5scsew1?se=2123-10-17T21%3A53%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7163f3cf-26d6-4b01-8192-ba5fdf55d898.png&sig=FIdBstYwEtsP5f1uPHYGTT2HX/JWb8CrPPYTz1p3Uao%3D",
        "description": "Adaptive D&D Dungeon Master with dynamic NPCs",
        "gptsId": "gpt-4-gizmo-g-vI51scLIo",
        "author_name": "Jonathan Leibiusky",
        "title": "RPGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0pHE6BZpenudoZAlwXeoAFXN?se=2123-10-20T10%3A58%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2e84bb28-4a7f-451f-a0e5-479d4a00dabf.png&sig=49WYpumA5DvEc9glgU%2Bw64HoMsJmGCYTO%2BDp2OIR5mE%3D",
        "description": "根据中文名字推荐外国名字",
        "gptsId": "gpt-4-gizmo-g-ZZciKgkOA",
        "author_name": "cyber-bubble.com",
        "title": "全球取名"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FRwl4Wahfwyv0dtwdXAcbAeC?se=2123-10-20T20%3A02%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfbb164b9-977b-48f3-9f18-d34159613548.png&sig=kaUSkq/KzFZMep%2BZ8hSPDXShnjWa2LC1qN8NxZPtDLU%3D",
        "description": "Creates unique slogans across various industries",
        "gptsId": "gpt-4-gizmo-g-v2G0y1tjM",
        "author_name": "Christina Kumar",
        "title": "Tagline Tailor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-U36oINZZwwnMlwvj0gMyfNAh?se=2123-10-21T02%3A41%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc492c5d0-979c-4563-9031-785f5cc46297.png&sig=zR7pnE7rXNySQZ/AQetifQdYMzMFfkG5qBthmnUd/hI%3D",
        "description": "Guides on raw vegetarian diet, inspired by Café Gratitude",
        "gptsId": "gpt-4-gizmo-g-YSbal29uz",
        "author_name": "Andrew Terista",
        "title": "RAW SOME"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HC4Meon36obwXwoDZEd8bcbp?se=2123-10-17T05%3A15%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D241699592909_.pic.jpg&sig=bCBWwhI1/0mBpDikRvbBCNWTUBoMPfvt%2Bg/4RZ3fg8M%3D",
        "description": "微信公众号优化指导",
        "gptsId": "gpt-4-gizmo-g-YtqGAnVQh",
        "author_name": "cyber-bubble.com",
        "title": "公众号助理"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZG9m5QOqqrg80VNRG2rn4nmw?se=2123-10-18T00%3A13%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc2d35c70-322d-477b-a431-39b605fb25f4.png&sig=%2B0B0%2BmaT2Zj1vQJjVh91HS4pGGflvaOI9jwsUhwOYj4%3D",
        "description": "Expert on Tamil Cinema",
        "gptsId": "gpt-4-gizmo-g-YLY5WPYKf",
        "author_name": "Guru Kirthigavasan",
        "title": "Tamil Cinema Geek"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-skPNxNwnsocRgZaoQrrfcaK2?se=2123-10-17T18%3A29%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1ef77d5f-f508-4533-ac33-a4e1b60065fc.png&sig=LSvrhcOQDgCzn53vuzMvnU3OzDrw6nl6jzqIXDpO3A0%3D",
        "description": "An imaginative assistant for parents to create indoor games for children.",
        "gptsId": "gpt-4-gizmo-g-wnrrJ27BB",
        "author_name": "Jessica Nowak",
        "title": "Rainy Day Fun"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-j52EtqGd76BoUwgC8klxig1O?se=2123-10-17T15%3A49%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db3847e3d-a183-413e-89f1-1a7689c9cb33.png&sig=z/cCtJvqctDOWTY9RB%2BL7VKX641alau0yU50rXGXy/s%3D",
        "description": "Expert on radiation effects based on UNSCEAR 2016",
        "gptsId": "gpt-4-gizmo-g-zFASp319C",
        "author_name": "JIE HOU",
        "title": "Radiation and Sources"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ENou2RCOgfIvc9EpznQsZ0Da?se=2123-10-17T03%3A17%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd156ee7a-6e64-4574-8aff-0313e3c69d86.png&sig=9PmDZ0sN%2BNiNuqxYZtSNfJE%2BRv96a5491vm5J2vNJ3A%3D",
        "description": "I'm a Tarot reader here to provide you with insightful card readings.",
        "gptsId": "gpt-4-gizmo-g-VwEcTiTDT",
        "author_name": "KWAN KEITH",
        "title": "Tarot Reader"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZtTObA56CIdCBiCcLtctf4j9?se=2123-10-17T09%3A02%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddd0c2a38-1ec0-4a04-9f0b-e1c09796e1f5.png&sig=V79A0qCpQ4Eat6027Cbft5JewP1lzXDREL0sSOhPFTA%3D",
        "description": "Advanced React and NextJS virtual assistant for expert advice and code troubleshooting.",
        "gptsId": "gpt-4-gizmo-g-zKJcW7bH3",
        "author_name": "Xavier Ramon Nicolau",
        "title": "React & NextJS Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yhWVRDm6ub1qV8x1f9uv408U?se=2123-10-17T06%3A32%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8501c6dc-62a8-42f5-b007-550a597f1f8d.png&sig=YdQ%2Byyzk6pmEs3/COy2a8HEqCIheHfsfxkMVB6ux90I%3D",
        "description": "我是市场调研专家，可帮助团队深刻理解市场需求、竞争环境和客户偏好，并为产品开发和市场推广提供数据支持。",
        "gptsId": "gpt-4-gizmo-g-VcNiie9mB",
        "author_name": "ff c",
        "title": "市场调研专家"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rP1ynIHYBQBUvS8ba7bQNETD?se=2123-10-16T19%3A16%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.jpg&sig=dTOiqa1W9dJv9sU%2Bd2ISiMI62HpTB09L0NhQAIKojdc%3D",
        "description": "Tattoo design and stencil creator",
        "gptsId": "gpt-4-gizmo-g-WYuew8C64",
        "author_name": "Amy Smith",
        "title": "Tattoo Design & Stencil"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9idpZKBb6IKuCS9jEgy67wJf?se=2123-10-18T23%3A20%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3ed911b4-78eb-426b-895d-e8c522cb79b1.png&sig=Q36mHOrSNGGm4AXnD835LptATHZEgMqumntNKtKj1e0%3D",
        "description": "Ezra grades papers, builds rubrics, and saves you time.",
        "gptsId": "gpt-4-gizmo-g-zjD20K8a6",
        "author_name": "Utah MFT Clinic",
        "title": "Teacher's Aide Ezra - Paper Grading Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6uvVThNWG2VO9x60hzz3lzXm?se=2123-10-17T05%3A54%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc974cc9f-b2fb-4f3c-9ed4-635c3154be7f.png&sig=OB1gsnibVj5DBxbj5xdAu0o1Yxu2C5N7%2BPpmfQYyemU%3D",
        "description": "Structured song & genre explainer",
        "gptsId": "gpt-4-gizmo-g-ZDGT66eCb",
        "author_name": "CHENGGANG WU",
        "title": "我为歌狂 Melody Muse"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LG6mFhxWxfZumAClc9Ba4gvE?se=2123-10-18T10%3A29%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D26f5f9d0-d10e-4358-a763-20d979957375.png&sig=k5iuhRrQ28VwkZgmfz13ke6dyuYj%2BUtvrMDwMI8rSXA%3D",
        "description": "Consistent language, friendly computer task guide.",
        "gptsId": "gpt-4-gizmo-g-VcejALmvw",
        "author_name": "Xinglai Li",
        "title": "Tech Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tWdnJCK6uAdRQwbpMMg20gEu?se=2123-10-22T13%3A43%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dabd6063d-8a06-4f65-a808-148608e6aa21.png&sig=X7RYLqA6PoXCyfmAx3yF%2BhTc7OT2z0mJ0glhNCtiObM%3D",
        "description": "Assists in finding online video platforms, prioritizes free options.",
        "gptsId": "gpt-4-gizmo-g-zuDfR530P",
        "author_name": "zezhou lin",
        "title": "所有视频在线播放 GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lVNfgp1Z1QM8vYG9WKFccyac?se=2123-10-19T07%3A30%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd23d6e18-ea2c-4e87-aa5c-e6c9fe382361.png&sig=w%2B5YOGHe7qHW/7mymNTGIDyeD3RWrlWqlI4Lo66qkug%3D",
        "description": "提供多语种天气、新闻、美食查询，包含3D卡通图片",
        "gptsId": "gpt-4-gizmo-g-XvIQ1aKWF",
        "author_name": "Xuan Yu",
        "title": "当地新闻和天气预报"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-onBj7WonkoteqIHFWbInjg7B?se=2123-10-18T16%3A47%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D57fcc091-41e6-4817-b1b9-9cbd256d8f9d.png&sig=dnBG2RbPC3JkMHLUva8iH0nIYBevnUxVv8NCgfBUkA8%3D",
        "description": "A helpful guide for smartphone users, providing easy step-by-step solutions.",
        "gptsId": "gpt-4-gizmo-g-wxQqRtTKP",
        "author_name": "Berwin Singh",
        "title": "Tech Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3etmQhfXtQ4lQO2981w9srhC?se=2123-10-18T03%3A29%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7944f5f6-30f1-410b-b2d0-8985ba2b5f9d.png&sig=TKjAC5HoAjLCmqwgqQd6O5K1TObsEFyt05e%2BeE9dCHY%3D",
        "description": "弾いている画像をアップするだけでフォームを分析アドバイスします",
        "gptsId": "gpt-4-gizmo-g-zfkMtbdlF",
        "author_name": "akiyoshimasashi.com",
        "title": "弦楽器フォームアナライザー"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0KaXm9ywx99PeFmQrJRh94zF?se=2123-10-17T07%3A12%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D987c0351-86f1-45c1-a3e9-f463ce2d7724.png&sig=6xigtolW4JBbzwjcNrSijIkuCODTaUabRuoeYDtdv9U%3D",
        "description": "我是一名批判性思考专家，擅长运用对立提问技术，为客户提供深度分析和策略规划服务，其专业知识和经验使她能够帮助客户从多个角度审视问题，发现并把握潜在的风险与机会。",
        "gptsId": "gpt-4-gizmo-g-wRpoKaQWp",
        "author_name": "ff c",
        "title": "批判性思考专家"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2ocUMh2dDqlaNbdbQ0xUeSLF?se=2123-10-19T01%3A08%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4206e00e-5d6b-4e23-9066-275f2e429e00.png&sig=Va0ar%2Bn3dDjlE3wRyITdbQX60TtMB57Uj0xidvlYguk%3D",
        "description": "常識から自由な、非凡な回答をしてくれるChatGPTです。",
        "gptsId": "gpt-4-gizmo-g-WHhUxgw0e",
        "author_name": "Kadota Narita",
        "title": "斜め上の発想をするChatGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gtDnKXZK1o9MQFHSGk9YmqjI?se=2123-10-19T08%3A45%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da144082d-5844-458d-bf3b-c6906bfa3bef.png&sig=vBXdfedTmUXz14yU7iKH85CQ%2B%2BkVyeg9KzneRkAVjgA%3D",
        "description": "Bilingual educational advisor for students and parents",
        "gptsId": "gpt-4-gizmo-g-zL2UX729s",
        "author_name": "Andrei Gavrilov",
        "title": "教育导帮"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-57eQxeDDlZ7peiM2B67wlcDJ?se=2123-10-18T07%3A16%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df853fe00-7711-4738-8f2f-023abcef69ed.png&sig=kOGOThgURwq6G610S4zgHLp3ZzWifnlMDztEELEypqs%3D",
        "description": "Friendly, casual cannabis news and research updates, focused on Japan.",
        "gptsId": "gpt-4-gizmo-g-Vi8rUChnw",
        "author_name": "HIROSHI KOBAYASHI",
        "title": "日本大麻党情報局"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qtLNmva4EkqIvuNn8JM4DSfd?se=2123-10-18T11%3A47%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1e5a322d-3584-4957-9f21-728e65ee6e2c.png&sig=hX4iKAEPu9YrowkBTN49jJZKi5cZAp5Hx3oBOjJiGgw%3D",
        "description": "文章を入力すると３種の文体に書き直してくれます。",
        "gptsId": "gpt-4-gizmo-g-vD7k2Ws8N",
        "author_name": "Kadota Narita",
        "title": "文体実験"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ap7FFTw0rvXwEjo1yM1guRgl?se=2123-10-17T17%3A09%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6bb3f8e7-2575-47ca-aee4-034da44ab1d5.png&sig=wrduZtz/5JnmrkCXDM7ftX1WD2rCWiiz/Gz6qW68l5Q%3D",
        "description": "Summarizes the latest AI and brain-machine interface news in a concise, neutral manner.",
        "gptsId": "gpt-4-gizmo-g-YW7teiKPy",
        "author_name": "Xiaohui Lin",
        "title": "Tech News Summarizer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yKQthlcNPYDnJLNfsgiHw7W4?se=2123-10-22T21%3A37%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3b5243026a8a51c316895039e5f9f76.jpg&sig=2n2SIXmKr5Dr75lH%2BRuD4ESNIsxMqJjros5qiZ2lVpY%3D",
        "description": "更适合中国宝宝体质的专业滑雪助手，提供装备推荐、技术软件、姿态调整和住滑规划",
        "gptsId": "gpt-4-gizmo-g-y0AZC1apN",
        "author_name": "Colin l",
        "title": "滑雪帮"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IhC4XnqCatDlgf3G9LQQySYd?se=2123-10-17T02%3A12%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D79936517-e2f4-475f-9e0d-0a7c2f45bf33.png&sig=VgKVsKtScUrupjakCV4ACku9AFYpVe8iKZO9RNpXUiU%3D",
        "description": "大喜利のお題、画像でボケてのお題を無限に出してくれます！　大喜利の回答を画像イメージにもしてくれます！　 Generates unique Oogiri prompts and images.",
        "gptsId": "gpt-4-gizmo-g-vj7Z7egra",
        "author_name": "JUNJI OKAYASU",
        "title": "無限大喜利GPT (Endless Oogiri Master GPT)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kwqaUGQ7LX4AKZmZHFg1KuL5?se=2123-10-17T09%3A59%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dtelemo_girl_idol.png&sig=TgRr0j6Er5vSTcvDUeCAHlp2efXlV84MBv3Q/ECh9fQ%3D",
        "description": "推しと二人で話せる通話アプリ",
        "gptsId": "gpt-4-gizmo-g-wUYcPqbby",
        "author_name": "telemo.me",
        "title": "Telemo 質問AI（ベータ版）"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-abWvIqKkaQYG2r25WDvldJxk?se=2123-10-19T07%3A09%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DWS021986.JPG&sig=iBoxQiJGCBDK7eRTUXws4SnuNrLqvxUuR9Y7IqxopuU%3D",
        "description": "なんか相談があれば話しかけてね！タメ口でいいよ",
        "gptsId": "gpt-4-gizmo-g-wvTov4pVg",
        "author_name": "BUSINESS CARD",
        "title": "相談に乗る賢いギャル"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TijK1eQgVnif2tCtQEYJ2SLb?se=2123-10-21T09%3A44%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D67034bd8-d3d3-4b76-8abb-8675a22a7f19.png&sig=tMPsrfEyr5mMelZ4pEB9Kx/AsEgcfiy21umUlLuEoT0%3D",
        "description": "Create Chinese  Character emoji for you and your life.",
        "gptsId": "gpt-4-gizmo-g-Yd51TPA5d",
        "author_name": "zhanglei",
        "title": "禅"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4ShgGsXJIX1c6LPT3jAc0DjS?se=2123-10-16T23%3A49%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df6fd20d3-6ee5-4b51-8a16-27120f20b96a.png&sig=239tmUCAK3XDuYFHV%2BYjY1gU5wKuNzwkr09OLVfRI2M%3D",
        "description": "Your go-to source for Tesla and EV knowledge.",
        "gptsId": "gpt-4-gizmo-g-XoF2Qfa6F",
        "author_name": "Omar Qazi",
        "title": "TeslaGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-j2w2FUnFTGCNFEoMOO3jAdOT?se=2123-10-17T02%3A06%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc3be98f9-b365-4bf2-9886-747359fcad71.png&sig=jBfMCPPFTOTeAAAVBYlGnNTwesG2JyV1CctFMxut9nc%3D",
        "description": "よくある質問を解決します",
        "gptsId": "gpt-4-gizmo-g-wl8EUuUyX",
        "author_name": "manjubox.net",
        "title": "ゆっくりMovieMaker4サポート"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-s3SYK2b8ob3yOdn8iEmzO1nU?se=2123-10-20T07%3A23%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddda476b3-abd4-4245-bd89-91dbee34dd19.png&sig=0GRo3Zl6cZsa54YVkJ/rer8rdJ/LvZ0jnRaA3yGzos8%3D",
        "description": "全国の天気予報をお伝えします！！（Bring you the national weather forecast!）",
        "gptsId": "gpt-4-gizmo-g-xmAZgc6Ru",
        "author_name": "RYUHEI NAGANO",
        "title": "お天気お姉さん（Weather Girl）"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8t2CPBeok0Es3boLFg7ip5zh?se=2123-10-19T10%3A51%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dswift-og.png&sig=fWbtFSjgjAzPAygKxC7u44cdFskFqTxIzy5nmd7Txhw%3D",
        "description": "Expert in Swift and SwiftUI development and troubleshooting.",
        "gptsId": "gpt-4-gizmo-g-WncPYvTpo",
        "author_name": "STRICS IT GmbH",
        "title": "Swift Copilot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RQ5yGkua1m91oeokd8JzOvtT?se=2123-10-16T07%3A39%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D451d364d-46dc-4581-adac-a618f11abf64.png&sig=w1VasQzmi2wXxmtA1SOOcq7DKy9AthrDZTTUlipa%2Bbs%3D",
        "description": "Information om svensk lag. Ger ej juridisk rådgivning.",
        "gptsId": "gpt-4-gizmo-g-XXoCDGIfj",
        "author_name": "Lyticell AB",
        "title": "Svensk Lag"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pr5PPFv0MvRmSUru70idwDIS?se=2123-10-17T14%3A07%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D617467f3-7182-47fe-9e6b-eb315a7c6256.png&sig=fwccvP6GVm7hlgY6Y8qwX7RiekF%2BjJlGBpKdll9KqCE%3D",
        "description": "Asistente y maestro experto en Python, enfocado en la enseñanza y apoyo en proyectos de programación.",
        "gptsId": "gpt-4-gizmo-g-V99xyNmaP",
        "author_name": "Ricardo Adrian Ruiz",
        "title": "Python Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ueTyi0YujVbcPWaF8s9Oy1MZ?se=2123-10-17T05%3A25%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da1d8ef11-0109-486f-9d23-82f1112e014f.png&sig=zIYQMvUBgyoq6Yaawallt5dU17%2Bpufmu/yi4t1TIPOo%3D",
        "description": "A Python tutor creating stepwise coding challenges.",
        "gptsId": "gpt-4-gizmo-g-uY1Ec6U1T",
        "author_name": "Prajwal DSouza",
        "title": "Python Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Edj7xzvY7xu0EpASCjvD4m3A?se=2123-10-22T09%3A27%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D59eade5d-f0d2-4afa-aabb-7675975536d2.png&sig=9UfWOfN6PS/qhoT2CUD1lac9INv0eGBo3Skad5TuUyM%3D",
        "description": "Friendly expert in Python web scraping scripts.",
        "gptsId": "gpt-4-gizmo-g-Z23WxC7xw",
        "author_name": "Yoan GRENETTE",
        "title": "Python Scriptsmith"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0UQbsdbPVQF8sjDYIPpSTgBR?se=2123-10-18T11%3A54%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc733a22f-5749-4234-9e0a-28e25e86cdb2.png&sig=dWfgsLyWGrRTJRHqeND2/Th5AFpJ%2BxXG4Qdzlr7smEo%3D",
        "description": "Python expert engaging in interactive step-by-step problem-solving.",
        "gptsId": "gpt-4-gizmo-g-XNUGynP54",
        "author_name": "Omar Nagy",
        "title": "Python Pro Solver"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WsNC82RJkEFJCjlNUkfcoEN4?se=2123-10-19T09%3A18%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dccbb57a8-3839-4994-9f63-cb67f3cb62fe.png&sig=97NVrwzDtZjJb7OKV88/ybDuj5Xk1h%2Bq2lBRCtUMcLM%3D",
        "description": "Swedish grammar expert with verb visualization.",
        "gptsId": "gpt-4-gizmo-g-YQPuL4Vxu",
        "author_name": "Anandavadivelan Vijayaragavan",
        "title": "Swedish Grammar"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cq8iuP2qPxScscjwMGAFvn6T?se=2123-10-16T22%3A35%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7c09e793-e98d-490b-81dc-9e4c828e723e.png&sig=Lt7huJVg%2B2Q8sHMP0TZ2ARB5zDETdToxiP0RfSIwI5A%3D",
        "description": "I create QA acceptance criteria from Figma.",
        "gptsId": "gpt-4-gizmo-g-vlcMq8tpK",
        "author_name": "Ishita Arora",
        "title": "QA Requirements from Product Mocks Generator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yBaTnlTvfdkV8AZiiMOyG1S7?se=2123-10-19T02%3A45%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0b85fe3e-a897-4ef7-90c6-138e0b3b3e3e.png&sig=h1FYNxUS%2ByoA5S8uCh3yh0H9LnYkjBuybRg8x0Qg6Jw%3D",
        "description": "クワガタ、カブトムシについてのChatGPTです。",
        "gptsId": "gpt-4-gizmo-g-ZmOUd96o6",
        "author_name": "HIROMASA MORIKAWA",
        "title": "クワガタ先生"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6GrRMNaxr27c6ZHDaXMECCix?se=2123-10-17T20%3A24%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4d440422-4bed-4676-bdd6-2120bca540aa.png&sig=rzUB1%2BXd6dQqgAIcay%2BjmbRXAIdqtDr7zO7uBR1nNnE%3D",
        "description": "温かさと安らぎを与えてくれる、優しいカピバラのカウンセラー、カピリン。",
        "gptsId": "gpt-4-gizmo-g-vfwmTffYd",
        "author_name": "Kirin Okada",
        "title": "カピリン"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DZv2UEx3q7JVZSjWs2nc7NtP?se=2123-10-17T09%3A06%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D759cc3be-41a3-40c8-9fc5-909be0311cb3.png&sig=P45pjJRmvHbkajN1VRxoWFOttWvEBFswB7GpphoiADc%3D",
        "description": "HF trading expert with a blend of professional and conversational styles",
        "gptsId": "gpt-4-gizmo-g-VecdzqOmM",
        "author_name": "PO-KUAN LI",
        "title": "Quant Explorer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aVFAZasEr90Kb4RkLbBZ6zyO?se=2123-10-16T18%3A31%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcda34fff-7e00-41d2-b01c-0fccce4d41bb.png&sig=mEeTCkMJSCVfo9MuKMxGEKiz%2Bi8IAsAOwHB5v/T390Q%3D",
        "description": "Assists with quality raters guidelines.",
        "gptsId": "gpt-4-gizmo-g-w2yOasK1r",
        "author_name": "Laurent Jean",
        "title": "Quality Raters SEO Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WRquXmeWoSj6aUCajXYc6KJI?se=2123-10-19T05%3A02%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9077bc89-a15c-401b-8932-1b340fe5ec18.png&sig=2SFLNoCGE8eNx%2B7VjD7WIaq6p27/MpnqngjSQJNnBUg%3D",
        "description": "ブログ記事を考案してくれるChatGPTです。ガイドにしたがうだけで記事を書けます。【手順】①「開始」と入力すると対話が始まります。②文字数まで入力し終えると「少々お待ちください」と表示されます。③このとき「つづけて」と入力すれば記事が作成されます。　　　　　　　　　　　　　　　　　　　　注意:ChatGPTは事実に基づかない出力をすることがあります。利用する際は事実確認をおすすめします。もし当ChatGPTを利用して損害を被ったとしても責任は負えません。",
        "gptsId": "gpt-4-gizmo-g-Y8kwulyOV",
        "author_name": "Kadota Narita",
        "title": "ブログライターアシスタント（ガイド付き）"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NIKKqnS0Cl50wbjuLE9fyQYx?se=2123-10-17T08%3A25%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6c84d824-a3af-41e4-a025-9f03c39c6ad2.png&sig=X7rL1YkPFAKQ7QgTZY%2BxJD9IrIse7NLiQ3/4sMVzHgs%3D",
        "description": "A QA Engineer helping with QA processes and best practices.",
        "gptsId": "gpt-4-gizmo-g-xTE71TE0H",
        "author_name": "Veirify",
        "title": "QualityAI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yIZJjCzsTGettKeM8Pdnil5y?se=2123-10-15T23%3A18%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4e11a0d0-398f-4ab3-8b82-18e865b7b77b.png&sig=d/X3v86ueWRfRKVzmsyS%2BwTeHceeQiNGjXO1ekYo2zQ%3D",
        "description": "I answer questions about DuckDB based on the latest documentation.",
        "gptsId": "gpt-4-gizmo-g-UyKHse2vR",
        "author_name": "Matt Holden",
        "title": "QuackGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jrpjY0EjrHcFGM0hORtf3qz2?se=2123-10-16T23%3A30%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfa3056ba-9f8c-4ffd-b119-5eff1aada2a1.png&sig=d1IZKZXdG0RYJ3UEjXAihfEBV/MLOn%2BzrhXw80bRB4M%3D",
        "description": "A guide in traditional wellness for seniors.",
        "gptsId": "gpt-4-gizmo-g-wkkiVT0t5",
        "author_name": "Jin Lu",
        "title": "一个养生师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QzuPDxlrgjUVdhMai3vu4lsA?se=2123-10-18T09%3A37%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E3%2582%25B9%25E3%2582%25AF%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%25B3%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%2583%25E3%2583%2588%25202023-11-11%252018.37.00.png&sig=%2BUAcKI04b2T4mjiO1nFkazJeThWuopuF6vO0%2BOAsP/A%3D",
        "description": "編集者のように、アイデア出しから構成検討、文章の校正までを寄り添ってアシストします。",
        "gptsId": "gpt-4-gizmo-g-zMhdMGjRO",
        "author_name": "Koichiro Matsuoka",
        "title": "ブログ執筆アシスタント"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CyOU27MkjFhkJ4Awsgq8Nmqw?se=2123-10-16T01%3A50%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E3%2583%2597%25E3%2583%25AD%25E3%2583%2595%25E3%2582%25A3%25E3%2583%25BC%25E3%2583%25AB.jpg&sig=uBcEmdsDDMflYii%2BcR2ryU/duWcdIexqB73I08voT0c%3D",
        "description": "リモートでも信頼関係を作りながら働く方法を一緒に考えてましょう！",
        "gptsId": "gpt-4-gizmo-g-vUYQGn1Oi",
        "author_name": "Tomohiro Ikeda",
        "title": "リモートワークの働き方コーチ"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-THJxuNZuD8fDREbdBdhiZWyb?se=2123-10-21T02%3A06%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dda548c9d-71dc-41bb-a8a9-425120ddf2ad.png&sig=6zIpPlkVxYO6rRggg1ap4sj%2BeucJ0JcTqlXNptwAjFM%3D",
        "description": "I simulate a TD Infinite Card, providing details and tips on its use.",
        "gptsId": "gpt-4-gizmo-g-z2j8Rd6fo",
        "author_name": "Salvatore Vella",
        "title": "TD Infinite Card"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sq45Gqy5be3FL4jTNtYA5uoW?se=2123-10-17T12%3A27%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dt3f_t3chfy.png&sig=lu8NXBG5yO1JldWnLDRvutqgdc/RR40nsrVtotoKkJE%3D",
        "description": "Asesor de propuestas para T3chFest 2024",
        "gptsId": "gpt-4-gizmo-g-yAZ8dHigK",
        "author_name": "T3CHFEST",
        "title": "T3chfy (Call for Talks T3chFest 2024)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ApktHMkZid1FR9LfgMAaicr4?se=2123-10-14T07%3A38%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dicon.png&sig=OriEhStlRChraWhhy1/26q9aTAb%2BMPep%2B6jk20IYbCA%3D",
        "description": "Enter any URL and have the text content summarized for you!",
        "gptsId": "gpt-4-gizmo-g-XrwZyE9OZ",
        "author_name": "orrenprunckun.com",
        "title": "TL;DR"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TFM9IYOun49IdVlIRYlsCM5m?se=2123-10-20T12%3A13%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd55cf611-ecc8-4ee7-ab57-bdfd84729df3.png&sig=ruYhEy4qGdtD6Z8B/i7eYDnNoMqErsfBo8OQsONNChs%3D",
        "description": "Surrealistic",
        "gptsId": "gpt-4-gizmo-g-vXj6wGqjV",
        "author_name": "thethirdmind.org",
        "title": "THE THIRD MIND"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dnrVg9Qcd9EXeyTFqlq4awpV?se=2123-10-21T01%3A40%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3846d499-a956-4081-8754-977daf0752c8.png&sig=lv/ES9INY3M6pg083WzZKsUlo8jLHtkEguMU/w2b2gA%3D",
        "description": "You can create almost any image, making a masterpiece from thin air!",
        "gptsId": "gpt-4-gizmo-g-z9mT0nYIk",
        "author_name": "Joshua Bodnar",
        "title": "/Imagine anything"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-O1BE4ME4zwk5ELSvUo7oi2zx?se=2123-10-19T03%3A02%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D537280ff-22b8-4b06-b4da-7301ac72524e.png&sig=8PhPnsUsPYcQZXLzwhI082VmEtvdr8XbJqGR4%2BenbrU%3D",
        "description": "A generative true crime podcast that couldn't be more boring and unexciting. Use with voice mode and sleep tight!",
        "gptsId": "gpt-4-gizmo-g-W9mPAwUxV",
        "author_name": "Brandon Lee",
        "title": ""
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PsMQGGOvQxRpdk1VY5BUJ5V8?se=2123-10-18T22%3A59%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252003.38.18%2520-%2520A%2520vibrant%252C%2520eye-catching%2520rounded%2520icon%2520for%2520%2527Image%2520Generation%2520with%2520Self%2520Critique%2520%2526%2520Improvement%2527.%2520The%2520icon%2520features%2520a%2520stylized%2520representation%2520of%2520image%2520gen.png&sig=qmuFNvB56HrU2KJrItmxNxuc2rII/0QzdPacChtMY80%3D",
        "description": "More accurate and easier image generation with self critique & improvement! Try it now",
        "gptsId": "gpt-4-gizmo-g-zqVSzFtup",
        "author_name": "Nextgrid Sp. z o.o.",
        "title": "* Image Generation with Selfcritique & Improvement"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Teku2NzLH73k8kJFp3ZScFD5?se=2123-10-18T19%3A13%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1aba194d-5b74-4440-98a5-1e16bb31bca2.png&sig=a7teYHoL%2BxJ0bWLvwPGPaA1L8n/qCKVyeinbWhoIebo%3D",
        "description": "I am a practitioner of yoga, with a deep understanding of Buddhist scriptures and meditation. I offer guidance and wisdom from Buddhist teachings to those seeking clear direction in life.",
        "gptsId": "gpt-4-gizmo-g-v4tZS6Lvo",
        "author_name": "yongtaizhou",
        "title": "(Zen.禪)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8zfpFKgO5eR0ArpCBAQGdHRS?se=2123-10-18T23%3A08%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252003.38.18%2520-%2520A%2520vibrant%252C%2520eye-catching%2520rounded%2520icon%2520for%2520%2527Image%2520Generation%2520with%2520Self%2520Critique%2520%2526%2520Improvement%2527.%2520The%2520icon%2520features%2520a%2520stylized%2520representation%2520of%2520image%2520gen.png&sig=8civ6ec%2BKbVHNV6LNlTjh6P%2BASnlHNL9lM3QFha02ZI%3D",
        "description": "More accurate and easier image generation with self critique & improvement! Try it now",
        "gptsId": "gpt-4-gizmo-g-z3aT7hEVW",
        "author_name": "Nextgrid Sp. z o.o.",
        "title": "!\"Image Generation with Selfcritique & Improvement"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FNZjVJcvzpJeB09WlkUot783?se=2123-10-19T03%3A40%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D60725490-19dc-4582-905e-e4e2a4d26ef4.png&sig=M1CIhWHcCJxzgZUkd6PmVsbgb2m%2BQxzyDH/faEYQXrc%3D",
        "description": "Role-play as key figures, real or fictional, during defining moments",
        "gptsId": "gpt-4-gizmo-g-xzIZtmxEF",
        "author_name": "Robert Dearborn",
        "title": "The Room Where It Happened"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kUFAkftFB78p7owf3BnieocT?se=2123-10-17T19%3A16%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd1e2a1c8-f032-4be1-a4e3-6b7ac7e8bc5a.png&sig=X8chqj1Zx4hIHYExZsrqzuCjn7QjNpJaM3J%2BkfoxLFs%3D",
        "description": "Generates spicy tech tweets to spark engagement.",
        "gptsId": "gpt-4-gizmo-g-y2i2zJKDa",
        "author_name": "Barrett Breshears",
        "title": "The Spice Must Flow"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-H9CgzdhfneATqGmbC6KZ2Rtn?se=2123-10-18T16%3A41%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd2ed7c26-5e5f-43ea-b973-80c96be616c9.png&sig=NFQuzoAjZsJ0bLcSS3LpD7vjCCDKEpiwdVknMUjZhS8%3D",
        "description": "A fun game of ACTOR versus ACTOR. Get the conversation and debates going!",
        "gptsId": "gpt-4-gizmo-g-vxnVj8gGL",
        "author_name": "Oswaldo Reyes",
        "title": "ACTOR versus ACTOR"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7pwQvLR2G1Bs2l9ubqlWpC0W?se=2123-10-17T07%3A31%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfd5a9a1f-983f-48cc-aa65-b35ccb40cab0.png&sig=sIMdsTfdnvaT0xrF4s6bXAAG2DB5wGbbYS3P%2BqXJxis%3D",
        "description": "Crafting global humor in every story!",
        "gptsId": "gpt-4-gizmo-g-XFliM3Ewu",
        "author_name": "博昭 川橋",
        "title": "The World Cosmic Humorist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2F40zK4eJrEdQPvsLjEeGb5I?se=2123-10-16T21%3A20%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DImage%252011-9-23%2520at%25202.20%25E2%2580%25AFPM.JPG&sig=CtUJVYCR7y%2B0JrPedi7qTB5PT5x0pNyuhwVDEgCK1Xg%3D",
        "description": "Web design and development with a hint of magic.",
        "gptsId": "gpt-4-gizmo-g-z8x3IqhMp",
        "author_name": "Nicholas Gmitter",
        "title": "The Web Mage"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-oEMjt8zq48e3IU2nYAT5fe2G?se=2123-10-17T09%3A53%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da412895b-200e-4ca5-9b1d-70b28b3c14bc.png&sig=cGF7Wz0kXn7raeQScpHvanjxhoEI7XPHDq4RBBNCV0Q%3D",
        "description": "Leverages optimized prompts and action driven GAN upscaling to create 4K images.",
        "gptsId": "gpt-4-gizmo-g-UyoYGD4Fj",
        "author_name": "Robert Helgason",
        "title": "The Ultimate 4K Image Generator - DALLE3+"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OU5qjE6gCcPAEeVNFUzA2yX5?se=2123-10-22T03%3A32%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6137a6a5-4e7d-4d08-ba1a-88493a88cb62.png&sig=pxZnnmz/3KCwvcmyjnftjqEOqpZOC6BghVWMVIPPkE4%3D",
        "description": "Friendly, casual theatre acting coach for all levels.",
        "gptsId": "gpt-4-gizmo-g-vxhuiOrHq",
        "author_name": "madhu r",
        "title": "Theatre Acting Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bGJ1zJsyqHgAMJK8NlWNr6ei?se=2123-10-17T12%3A09%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DOrange.jpg&sig=t46WakOrVrsjCPk8H7lVJAIdd78FZm9NitIxu%2Btg1eE%3D",
        "description": "Guiding your journey to self-discovery and authenticity",
        "gptsId": "gpt-4-gizmo-g-z97N0CJzw",
        "author_name": "Tobias Svenlöv",
        "title": "The Youprint Method"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PdDrSt5fBKtOjdoQ0A2mmUL8?se=2123-10-23T04%3A33%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-15%252023.32.54%2520-%2520An%2520updated%2520icon-style%2520avatar%2520for%2520%2527Aardvark%2520SEO%2520Ally%2527%252C%2520now%2520more%2520approachable%2520and%2520distinct.%2520The%2520anthropomorphic%2520aardvark%2520in%2520side%2520profile%2520should%2520have%2520a%2520f.png&sig=5sTEhSia0FnzL6y/oAWCuUslXGbpnaXuDQdmwm6/GHk%3D",
        "description": "SEO: Boosting your website's search engine spotlight!",
        "gptsId": "gpt-4-gizmo-g-ydSolM8C0",
        "author_name": "Julian Youd",
        "title": "Aardvark SEO Ally"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RloZhrk4B1Kf9nMwUi6MM97F?se=2123-10-17T19%3A38%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D87e9af76-fd5a-4363-9c22-73bf290c99c9.png&sig=j1IM2pSI6a5pZH3b/d7qlzXnikKqOZ87%2BBnWWbtToog%3D",
        "description": "Providing deep knowledge during the AR Effect creation process",
        "gptsId": "gpt-4-gizmo-g-z469j1vnV",
        "author_name": "Leighton McDonald",
        "title": "AR EFFECT FILTER GUIDE"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qBKQ5n7dF8Z3yF40TwodkSFG?se=2123-10-13T21%3A30%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db12-logo-purple-bg11.png&sig=u0nvytv1UUsf1eDIWL8bkxlHk6KVT3jWAUebQZoYe8E%3D",
        "description": "Create and publish a website on a domain with blog/payment/scheduling pages to market your business",
        "gptsId": "gpt-4-gizmo-g-WTUuSzTOj",
        "author_name": "Adam Marcus",
        "title": "AI Websites"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LlXz3J9h0fPkRq4xII8l9YA6?se=2123-10-22T01%3A34%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D17aa60d9-4c2f-46d2-af06-8e133ff1b617.png&sig=nudTguvDDrdKM7MutKoU%2BqpCCypckQrbN33lGE3aowE%3D",
        "description": "以AI算法为小红书帖子创作有潜力爆红的文案。",
        "gptsId": "gpt-4-gizmo-g-vSt32YjAl",
        "author_name": "zezhou lin",
        "title": "AI生成小红书爆款文案"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Ex7wgE6E2tiVRQ5o0QO9bEuS?se=2123-10-17T17%3A42%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E_2023-11-11_01.35.17_-_A_portrait_of_a_traditional_Chinese_Zhouyi_%2528I_Ching%2529_master%252C_in_a_serene_and_historical_setting._The_master%252C_a_middle-aged_East_Asian_man_with_a_conte.png&sig=FGeAbQhGA730oJSbPZQP54io3KugPxAQC1tfNpmRjHc%3D",
        "description": "积善之家必有余庆，积恶之家必有余殃，免费算命不求人",
        "gptsId": "gpt-4-gizmo-g-VKTrAZPnT",
        "author_name": "sunchangzheng",
        "title": "AI 周易大师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9zKHxfEtnjWcjIE7SXurQKcF?se=2123-10-17T23%3A26%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc418c7bb-3f14-40f5-b3b6-40dbb6ae12f4.png&sig=xE1PSx%2Bl3E62oXTpePXk7Jbxyg7qoXwq31VZkolG8HM%3D",
        "description": "A fun game of ANIME versus ANIME. Get the conversation and debates going!",
        "gptsId": "gpt-4-gizmo-g-zMmsWKbac",
        "author_name": "Oswaldo Reyes",
        "title": "ANIME versus ANIME"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-eqAzgyBD3L1i0n1wuAYfmuuQ?se=2123-10-18T18%3A06%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De688b0dc-f9d3-4199-8c63-6901197d3a49.png&sig=H4z1s0SddGJSIQGmvm7YF8HgfZVZTTwM81si5wxHgpw%3D",
        "description": "Empowers the creation of bachelor theses in English and German by providing expert guidance on structure, language refinement, and citation adherence.",
        "gptsId": "gpt-4-gizmo-g-wvp5rYCCc",
        "author_name": "Mayar Hanhon",
        "title": "Thesis Scribe"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1RYkuvTslSFxsxkDeSv1VGy3?se=2123-10-18T20%3A58%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbot.png&sig=fsbYq4gfYZ5XZGtdbDEVcPXUR%2BhT8hKME0/qTALIhhg%3D",
        "description": "A specialized GPT for the latest APT threat intelligence.",
        "gptsId": "gpt-4-gizmo-g-Vy4rIqiCF",
        "author_name": "taha karim",
        "title": "Threat Intel Bot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iazB97hO7kJAaL819YdSHDZe?se=2123-10-17T01%3A12%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D24a2f597-d98b-42fe-9b06-d065db44d061.png&sig=W8o5SrH7w7lZ3aVcRSDrJg0Nbr5/2x6IKHhFwGLkVdg%3D",
        "description": "Sharing /u/throawaylien's extraterrestrial encounters",
        "gptsId": "gpt-4-gizmo-g-V6kKjqgP5",
        "author_name": "Joshua Brown",
        "title": "Throawailien"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ChNWtnaiEl9IRopAqKZoiqNA?se=2123-10-21T13%3A50%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6954bfb7-fd98-4de8-bb5d-e1624541e1a5.png&sig=KcdbMFL%2BdMJeP4nPoEQFejWER5CayfWyHHxialrf0ws%3D",
        "description": "I create personalized, size-specific gaming thumbnails.",
        "gptsId": "gpt-4-gizmo-g-XTqcoIX7I",
        "author_name": "Tyler S Austin",
        "title": "Thumbnail Artist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-P4MjrkLiIrGwxzY2RG6A3Yqp?se=2123-10-18T00%3A07%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DGroup%25203.png&sig=fblqERPjZnojdmJObDVImj1%2BGclENTvcZcWS784vLWI%3D",
        "description": "This Custom Bot will help you design with Accessibility standards.",
        "gptsId": "gpt-4-gizmo-g-xmiCLnsjn",
        "author_name": "Sevak Petrossians",
        "title": "Accessibility Design Consultant Bot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SDFx7dajq3JLHKRbYLX3iUHU?se=2123-10-17T11%3A48%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D42355d3b-7ee9-4b50-ad4c-358777cf2f39.png&sig=uXSRlt5hG6e2xjO/5EPJFlAQt7%2BqE7hp0FT/vp7g1j4%3D",
        "description": "A.I. Itinerary Generator: Budget. Set. GO!",
        "gptsId": "gpt-4-gizmo-g-XxJat07cR",
        "author_name": "Rajan Babaria",
        "title": "Travel Planner Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mqRF9jzjPRB9DTv2WKJmJyTR?se=2123-10-18T14%3A34%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D95ebe3ca-5590-4c15-9230-f77c04f37840.png&sig=4b/%2BveBSHjipvge1/E/UCR1eZ%2B58MOideqesPDa7X/0%3D",
        "description": "I find and edit trending video clips.",
        "gptsId": "gpt-4-gizmo-g-Xi6QuOnvv",
        "author_name": "zezhou lin",
        "title": "Trendy Vids Curator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9eQ2XHwitcWRArA4M1G97pz8?se=2123-10-17T11%3A11%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De517c085-1f11-47ba-a737-2c26db6cd1e4.png&sig=UotY8L9wRWeoMGuDx2HPkASl/O5%2BUEMbBctbfMwmQHo%3D",
        "description": "Your AI travel guide for perfect vacations worldwide.",
        "gptsId": "gpt-4-gizmo-g-ygPt0Gi13",
        "author_name": "Josh Brent N. Villocido",
        "title": "TravelGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-EhNtehViwTzKu2pin2w4qN4x?se=2123-10-20T21%3A53%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D824c1382-5427-40e5-a5c8-0fb200f9b11f.png&sig=16P9jz52dxdT5RnrRdqsuE30dxeHNtL5N17fg0fs1k8%3D",
        "description": "Je dessine les monuments en Légo",
        "gptsId": "gpt-4-gizmo-g-xu7r1Q0E5",
        "author_name": "Alexis Mouville",
        "title": "Brick Master Monument"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xVz16WjAI9JCs8D0eINds9e0?se=2123-10-19T22%3A47%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db2c14e01-6068-4b3d-b4ba-58ece25ab431.png&sig=uVh9YdC1pLj7JtB0YnPZo1k974oh8EeRq1iHfoONDWo%3D",
        "description": "Find the rare Golden Spider!",
        "gptsId": "gpt-4-gizmo-g-vd6mSBuKm",
        "author_name": "Josh Brent N. Villocido",
        "title": "Bush Whacker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RAMvV28aO7aJLn2z4hN3vGfI?se=2123-10-23T03%3A28%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dantibully.png&sig=0VfjqneIf9FZA3yy/q/HvsqkbFeZVeHd9FeoqVSkiJ0%3D",
        "description": "Help you reply to bullying comments",
        "gptsId": "gpt-4-gizmo-g-XsMIj31oH",
        "author_name": "Xiaomeng Ma",
        "title": "BullyNoMore"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-I3ukq2E4uNMRhWo5CstpYVB0?se=2123-10-16T19%3A42%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De5c1eb73-bc2d-49d0-829d-421bbb055dcf.png&sig=4oy5G5KhXEAlBAJ6co5sOkFJ7E7bljHgyC62WbL5SIw%3D",
        "description": "Advanced truck diagnostic aid with detailed error code interpretation",
        "gptsId": "gpt-4-gizmo-g-y1j6WMcXt",
        "author_name": "Tianyu Zhang",
        "title": "Truck Mechanic Enhanced"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HltnuFRMegeyhoWu8uZdere0?se=2123-10-17T07%3A45%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcdc0a6d8-7d31-4c95-a89f-35bc9f0f1f7d.png&sig=iGCcjezW6sphY/Gu4PJssNaRx0cZn9vwxiH%2BcClFmtI%3D",
        "description": "A vocal diary assistant integrating GPS data for contextual entries.",
        "gptsId": "gpt-4-gizmo-g-vgQZ3tJN9",
        "author_name": "mario siega",
        "title": "Truffle Tracker Diary"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Cm5tPCGUPXrZeLmdXlD2aP59?se=2123-10-17T00%3A06%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D58039ceb-5d77-4384-b0e0-9aa9cd5e8981.png&sig=V1FtC1RmCgi8Cv9S0LzNCIwOIEBXM3gnfKv5xxb5o6Y%3D",
        "description": "I'm your trip accountant, tracking and balancing expenses.",
        "gptsId": "gpt-4-gizmo-g-yUP0oOaRr",
        "author_name": "Xuanyi Dong",
        "title": "Trip Ledger"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zxZupw39lyejnAKzRVXSBoRW?se=2123-10-21T18%3A05%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De4af3173-8fe1-4305-830a-60066bd39209.png&sig=QBqRJ1y9d%2BWjCAcJUa7oQvpgEMZzaW1tjPYKWBSoB7I%3D",
        "description": "A friendly and casual trip advisor for personalized travel planning.",
        "gptsId": "gpt-4-gizmo-g-wCFwr9QPi",
        "author_name": "madhu r",
        "title": "Trip Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aX11n4s8Gr5Z8XKERSZKsPO9?se=2123-10-17T03%3A33%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De3d24812-592e-48c4-9132-0022ca07015a.png&sig=Yc4bnq3tYvQpOv%2BLpo1ZcLVE0jOuVSVr9FDkoEzjITs%3D",
        "description": "Business consultant conducting PEST analysis.You can easily create a draft for consideration.",
        "gptsId": "gpt-4-gizmo-g-YeSn0ynP7",
        "author_name": "ProtoPlayStudio",
        "title": "Business Consultant(PEST analysis)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-amNZMnhjm22JHfFNoHF7DpON?se=2123-10-17T21%3A15%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D43278ccc-2ea2-41b7-9c0f-771b1d52e77c.png&sig=AJFVHDn1zHHEySnbx/mv5vteMvoAFCOxWxQPejT5L6w%3D",
        "description": "Craft your perfect mw3 and wz2 weapon builds based on the latest meta and your play style.",
        "gptsId": "gpt-4-gizmo-g-VjhJert1n",
        "author_name": "Alec Dilanchian",
        "title": "COD Meta Weapon Builder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D29IVh3EsKsOxUVF4POOCe0z?se=2123-10-17T23%3A31%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df172cabf-d9bc-4b15-8e28-caae9e0a47f1.png&sig=TNlXzin8XMGdGdgjLKeFWu67XLhsugOgXguADUbimnU%3D",
        "description": "A fun game of CARTOON versus CARTOON. Get the conversation and debates going!",
        "gptsId": "gpt-4-gizmo-g-VadMif0NL",
        "author_name": "Oswaldo Reyes",
        "title": "CARTOON versus CARTOON"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DVONRt6oP9YYtNRit5led4lJ?se=2123-10-18T23%3A05%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Def5af3ad-c4bf-4ccb-8c4e-d1338a311c9d.png&sig=%2BGsyTJfBvCjE0TuWg8UF6MUfCHCQratFSwo2oQzG%2BPg%3D",
        "description": "Your friendly and knowledgeable guide to Tulum, Mexico by WalkHD.com",
        "gptsId": "gpt-4-gizmo-g-vpQZVCgn1",
        "author_name": "Jason Flittner",
        "title": "Tulum Tour Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wEaPJzvFvz5lzLDhRiu29bsR?se=2123-10-21T08%3A49%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da427bcab-0e71-41e8-9f9e-419b1d48d82a.png&sig=qDfAnxNnjnM8bOjWsDOdUm/4LSJfBwpK0ueTLpzHf9c%3D",
        "description": "Offers advice on cat training, behavior understanding, and care practices.",
        "gptsId": "gpt-4-gizmo-g-ZjJDdJxhq",
        "author_name": "Hustle Playground",
        "title": "Cat Trainer Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-enhvpZSSXzov9lCSGccjhMzo?se=2123-10-16T22%3A38%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db8ce7b88-3df2-454f-a8ed-c538e7c2633b.png&sig=/YLbfTWF8he%2BwjAYG/aPy7GgCgL5S6BcOI9b34uLwJc%3D",
        "description": "Your go-to cat expert buddy!",
        "gptsId": "gpt-4-gizmo-g-zcK5BwOLZ",
        "author_name": "YiMing HAN",
        "title": "CatGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jFRhYfnoo5LCQLSms1tusZCx?se=2123-10-17T14%3A48%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dchaotalks_logo.jpg&sig=U%2BjLN9Ucu8mObTWhkWCnzCdbIoZljC%2BKlJ33Fl1S9VU%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-vYoZ7Da3t",
        "author_name": "io.chaotalks.com",
        "title": "ChaoGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YdcESd4A6A132mDjtyeoNVKR?se=2123-10-17T00%3A16%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252001.15.59%2520-%2520Two%2520large%252C%2520prominent%2520microphones%252C%2520side%2520by%2520side%2520to%2520symbolize%2520%2527twin%2527%252C%2520representing%2520an%2520interview-focused%2520AI.%2520The%2520microphones%2520should%2520appear%2520sleek%2520and%2520mode.png&sig=1K87SCr1%2BZLPllE8l1WH2wJ8PEVJb/qaT530RAtKN/E%3D",
        "description": "I create your digital twin through friendly chats.",
        "gptsId": "gpt-4-gizmo-g-xavKc7lOA",
        "author_name": "T C Brouwer",
        "title": "Twinmaker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-fkKM98Cc8OW9c1gDXBxEWvk3?se=2123-10-21T09%3A29%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D486674.jpg&sig=sGuI8E/dGF1Z1i0vWby68hImpH7ChgRopRw24o6YVt8%3D",
        "description": "I'm Chisato Nishikigi, your anime strategist in English, Japanese, and Traditional Chinese!",
        "gptsId": "gpt-4-gizmo-g-ylpEt3pMf",
        "author_name": "蕭聖諺",
        "title": "Chisato Nishikigi"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7WVisgaP8ZfBKeRZzu8y6j6d?se=2123-10-21T03%3A43%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D676dff27-bdc3-4c30-8b37-f96def36cc6f.png&sig=jXmJ5yZ3sdlN1VId3xIpMUUBUTiIaEhhk6LVcoJaF6U%3D",
        "description": "Crafts unique Twitter hooks for Solopreneurs.",
        "gptsId": "gpt-4-gizmo-g-vnBRjGX2a",
        "author_name": "zezhou lin",
        "title": "Twitter Hook Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Ns5zDhjdce1my13DUdpdqcZ3?se=2123-10-17T13%3A43%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da886cbd6-c2c8-442e-8be2-5870c8637df3.png&sig=G2VGDMw%2BTW/6qK6dSjbBSIxADKk0wt8quHkIPzlWb20%3D",
        "description": "Specialized in crafting attention grabbing and engaging hooks and a complete thread for X / Twitter.",
        "gptsId": "gpt-4-gizmo-g-Wi5WQPXnx",
        "author_name": "THE CLUELESS COMPANY",
        "title": "Twitter Hooks & Thread Crafter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hXBum9rFd2nDDAQRXkkbpA38?se=2123-10-21T18%3A52%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dae888415-3489-42e9-bf68-628e41bbe444.png&sig=qLEVPkATl6cXN/CoNQnARNI3%2BcDGe4xDDGAyzvdCyYY%3D",
        "description": "Your friendly expert in U.S. tax queries and advice",
        "gptsId": "gpt-4-gizmo-g-xObUUghgu",
        "author_name": "Xinghui Zhang",
        "title": "U.S. Business Tax Savvy Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QcERGxMA2Zx75pkgOvtgJw3N?se=2123-10-22T09%3A50%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5656ddb8-f072-4092-b593-89592c2c7fb2.png&sig=CRU%2B2kAm7ukftMSCQzzJj2CQq34VLpHaN8YAT6oeSqs%3D",
        "description": "Guides individuals and businesses in understanding and implementing clean energy solutions.",
        "gptsId": "gpt-4-gizmo-g-xg42JxPYj",
        "author_name": "Hustle Playground",
        "title": "Clean Energy Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vniZwW5ZtvbzzP41Vfa7rBiC?se=2123-10-17T07%3A54%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D56d60694-e97a-4925-8fe5-1dfaae59156c.png&sig=JIq0JufKsD3MtT7buEbsOWoY4dIGiNrYRHs/JPYjO7M%3D",
        "description": "Converts Turkish text in English script to Turkish characters and fixes grammar.",
        "gptsId": "gpt-4-gizmo-g-Xixrm9KUh",
        "author_name": "Murat Keceli",
        "title": "Türkçeleştir"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DQnJmU608p2vWrEtHED6bMfW?se=2123-10-22T19%3A03%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9d969c31-4c4c-462f-ae7b-c7a45393cd6c.png&sig=s1f/gz5Rc9XfeuAQG0s5rudMIxA/FPCmvOqWDG4D2bg%3D",
        "description": "Mentor for South Korean students on U.S. college applications",
        "gptsId": "gpt-4-gizmo-g-z4Dx0V5HB",
        "author_name": "John Ellsworth",
        "title": "U.S. College Advisor for South Korean Students"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OPYpbUrl1FWhQRFaBmiAZiKI?se=2123-10-16T22%3A13%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DCheffe%2520AI.jpg&sig=ZXD1t7DdldtIi/5eXS%2Bq6JtJ0/dC%2BNDihJbXr8ePlII%3D",
        "description": "Cooking is for everyone, and I'm here to prove it. Whether novice or a pro, I've got you covered.",
        "gptsId": "gpt-4-gizmo-g-xYdlToFwX",
        "author_name": "S Maharaj",
        "title": "Cheffe.ai"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aXYj6A7ONRLqZJBFvm1i86Sq?se=2123-10-21T03%3A02%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D93735601-c819-47b0-ad52-46f8f7b4ea91.png&sig=1uNOscjg71qAxAB0%2BTxWGRoIydWt6z6F2flv7YUxBuc%3D",
        "description": "Versatile UI/UX expert for mobile/web, clarifies needs for tailored advice.",
        "gptsId": "gpt-4-gizmo-g-wzU8Cq3Oy",
        "author_name": "Teddy Pena",
        "title": "UI UX Visionary"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-S7nS4cwp546swrIYmsSX4qdu?se=2123-10-22T12%3A30%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D666b326d-cabf-4af3-9e43-19af27efa055.png&sig=tUAnzh57W/il8zRwlq0Hc3Mptjk9/yGvGy5vNVr7/xo%3D",
        "description": "Expert in UFO/UAP analysis, employing scientific methods for realistic interpretations.",
        "gptsId": "gpt-4-gizmo-g-ZE5yK183G",
        "author_name": "Seadna Smallwood",
        "title": "UFO / UAP Investigator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XgAtOsPbYfBzXoobXGOr11vE?se=2123-10-18T05%3A09%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dmstile-512x512.png&sig=LuglhflHJWhEqcMERfgTYMZhCOkm6lP990gP77SDGFY%3D",
        "description": "Answering questions about CommandGit",
        "gptsId": "gpt-4-gizmo-g-WV1P671vE",
        "author_name": "Daniel Hofman",
        "title": "CommandGit Helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-RXLMUbHC6JZpnVZpoZDI1dmf?se=2123-10-17T14%3A33%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DCode%2520de%2520la%2520route.png&sig=PSk3mqYxE2sTacOGI3Fiv6wnIAaoDXAzDjRTom3nMS8%3D",
        "description": "Entrainez-vous pour votre examen du code de la route en posant toutes sortes de questions sur différentes situations de la route.",
        "gptsId": "gpt-4-gizmo-g-WiKZD7036",
        "author_name": "Kevin Ceyland",
        "title": "Code de la route française - Entrainement"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-waQdO8vapLaKCGci7Y9vZavV?se=2123-10-17T09%3A05%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D814f7f34-27a1-4aa7-a398-65b0869bebbc.png&sig=CXIWId4KSn8QaiJYhVCivrcih1fgNEpr72/fkfAAwX4%3D",
        "description": "A talented programmer responding in Traditional Chinese, tailored for Taiwanese users.",
        "gptsId": "gpt-4-gizmo-g-yys79Wsel",
        "author_name": "Jason Chiang",
        "title": "Code Wizard Taiwan"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aoDW50Lo3gRZrt3KzLk8GGF2?se=2123-10-17T23%3A14%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dedc5d7ab-d42a-4720-beb6-f8f1e202db1c.png&sig=pIzgF40B2c%2BxzNMOaAqzn%2BlcfrIcIkH9trKvBBqU76Y%3D",
        "description": "Guide on UK tax. Uses the latest available information from gov.uk",
        "gptsId": "gpt-4-gizmo-g-WHaAEG6kp",
        "author_name": "Raiyaan Shahzad",
        "title": "UK Tax GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0uc01XeHDpRx5s9lG4BdaoEG?se=2123-10-19T18%3A44%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D134dab90-b207-47bc-8384-65def983adff.png&sig=V2sq8Ban5Xw8gWnLdx/C4%2BmQ13eNoHixrpaiUakpMLw%3D",
        "description": "I summarize videos and answer questions.",
        "gptsId": "gpt-4-gizmo-g-xU8JplBJY",
        "author_name": "zezhou lin",
        "title": "URL Video Summarizer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ykmsiPL13RhNG9MUBqbx9de6?se=2123-10-17T19%3A06%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da87d86c2-533f-4781-8a25-83c0ac15bb3a.png&sig=6/ngKaf7BnM82NKXF4RIr/xJupqX9h2D3CDTySHAKY4%3D",
        "description": "Take a Picture and let Connie count those calories for you.  Myaievolution.com",
        "gptsId": "gpt-4-gizmo-g-XkhhyMBYT",
        "author_name": "Chrysti Reichert",
        "title": "CountMyCalories Connie"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-E7TdIjoSzghUYOUdqqE7Zueb?se=2123-10-17T11%3A38%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252011.35.26%2520-%2520A%2520simple%252C%2520minimalist%2520icon%2520combining%2520a%2520maze%2520and%2520the%2520Ethereum%2520logo.%2520The%2520maze%2520should%2520be%2520stylized%2520and%2520straightforward%252C%2520not%2520overly%2520complex%252C%2520with%2520clear%2520path.png&sig=Frreq8y72Sa8AxZhE/xi6kiSsfZcs8duO0NH8oAFVLs%3D",
        "description": "Solve the maze  | Find the key | Earn ETH",
        "gptsId": "gpt-4-gizmo-g-vyAjr5W62",
        "author_name": "Stepan Gershuni",
        "title": "Crypto Maze"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-y0oNL0vd349eN4cbSK7oUs7O?se=2123-10-16T23%3A31%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Davatar.webp&sig=YYb3n1NJhMkUv5eIlJI3MOvF9nwAkRnwgXtwNZguH6Q%3D",
        "description": "Welcome, seeker. Draw near the hearth and gaze into the Tarot. Whisper your hopes and let the cards unveil your hidden fates. The future awaits.",
        "gptsId": "gpt-4-gizmo-g-y3Ijk1mvr",
        "author_name": "Nikita Savrov",
        "title": "Daily Tarot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OF9y62kmGXuU4KCberPWxEfA?se=2123-10-21T21%3A48%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7a509736-4bad-4581-8a4c-4d4a8060ab67.png&sig=NVsW2b4T%2BU0rspYIVTc/ce2xe6i7a170lIR9SOjXfoo%3D",
        "description": "I write C# code and respond to inquiries about Unity. My database knowledge is refreshed daily with new, functional code snippets and information. If necessary, I can search the web to provide more accurate answers",
        "gptsId": "gpt-4-gizmo-g-YDkPh1fun",
        "author_name": "Volodymyr Ilianov",
        "title": "Unity GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LrtqerJCt81LeStpKqdELJJy?se=2123-10-17T04%3A06%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D23a12034-9d4c-467a-ada3-493fe3a35408.png&sig=px7f3YmDBgYtfc3bFFsLZCgxB5Tkv2BriuLA14SVQnA%3D",
        "description": "Tutor IA, online 24 ore su 24",
        "gptsId": "gpt-4-gizmo-g-yZD0m92U0",
        "author_name": "Demetra Formazione",
        "title": "Demetra, amica di studio"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-goVeV0KZTIJ109DdU0ScmHNA?se=2123-10-16T20%3A49%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddataminenetwork.png&sig=A8pYs/Es6ZZ/slt/PDb8eseXuMqgruZkbRk0g8bNtJQ%3D",
        "description": "Inflation-resistant currency built on Ethereum. Unique economic system established using a variation of Proof-of-Burn algorithm.",
        "gptsId": "gpt-4-gizmo-g-WdK2nNwGZ",
        "author_name": "Datamine Network",
        "title": "Datamine Network"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PB0LcheMeVYK5AkA4g4eqZSZ?se=2123-10-14T01%3A43%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8895f245-7255-419b-90fa-9251f485dc8a.png&sig=Uwz38m1RyvuKiXZeMV%2Bt95ZDxNlktoUVdkhgg8F4zo0%3D",
        "description": "Ask me about what happend in DevDay Conference from OpenAI.",
        "gptsId": "gpt-4-gizmo-g-WNmeP07xZ",
        "author_name": "틸노트",
        "title": "DevDay ChatBot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZE8aX3rA4fSgWV1har8cVEQt?se=2123-10-23T08%3A42%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db26fe763-4732-4335-acdb-a188cf07081d.png&sig=hK0UhDLQ2AWbYJDO58Kxz4Ena4%2BXJAk2o7PiPcvATT8%3D",
        "description": "A date night expert designed to suggest date night locations, activities, dining locations, and events.",
        "gptsId": "gpt-4-gizmo-g-WQzS5qrbf",
        "author_name": "Marcus S Elola",
        "title": "Date Night"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TXT7HWUBINgfZkqgu2kmnNiV?se=2123-10-14T18%3A34%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dicon-rounded.png&sig=/9CZNxcdZw/kqNEg8x9bKW0vU5pj9FEp0OblgNmM4BQ%3D",
        "description": "I can help you with decision making, keeping track of the decisions you've made, and reviewing your decisions later on.",
        "gptsId": "gpt-4-gizmo-g-Yrhca6pAj",
        "author_name": "Alex Meyer",
        "title": "Decision Journal"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rLh0xghIbTF48LB3dw2cha2q?se=2123-10-20T01%3A32%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6f5f97e0-7099-41cc-b8d8-e728d3938493.png&sig=BdP3H9eAjuHa2v2V1mmC4tnw6fKvdl0c9RKt47jleME%3D",
        "description": "Guide to Official Unreal Engine 5.2/5.3",
        "gptsId": "gpt-4-gizmo-g-wVxhcrEeD",
        "author_name": "Thomas D Sidwell",
        "title": "Unreal Expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3eHftL83zsMdYhYMFcdjX2BS?se=2123-10-22T02%3A16%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D951df746-f642-40eb-8e73-496b563b29bb.png&sig=qHC2nCK70XGTLerdlTNzWmEO608OItniN6mDW4wQxDs%3D",
        "description": "AI University Expert with extensive knowledge on global universities and related queries.",
        "gptsId": "gpt-4-gizmo-g-VxSg2V9OK",
        "author_name": "zezhou lin",
        "title": "University Navigator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-81hyEzYXvJ7L7Xli1VRaNHTh?se=2123-10-17T14%3A58%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db87bfd95-f9bd-484d-9b74-c15720eff0f8.webp&sig=nudf2RYH9XrqmUfUrU9fTeyZegGM9zqt8af8dqfZLSo%3D",
        "description": "A GPT tailored around educating and guiding developers using the Unreal Engine.",
        "gptsId": "gpt-4-gizmo-g-vVbBGf7WB",
        "author_name": "Mr C P Cook",
        "title": "Unreal AI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cfpoS0rFsOsaSZFL2gFyVwAj?se=2123-10-22T03%3A49%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9390d2eb-09c5-4f0c-9c08-d78bcaf3836c.png&sig=bWhAkXm%2BM327ONxErXZRkxi6dIypWGUdyVQ8%2Bu006Mc%3D",
        "description": "多语言，富有同情心的全科医生提供健康指导。",
        "gptsId": "gpt-4-gizmo-g-XbReEL4Uq",
        "author_name": "Nixy",
        "title": "Dr. 清北全科医生"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8IvAfZUXhPFG148vC5wgaP1E?se=2123-10-17T15%3A47%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddockerdwarm.png&sig=et6uPuoFn1774SLKqqdTqkneMB6cTXYDM1cCZxPEM4w%3D",
        "description": "Expert in Docker and Docker Swarm solutions and troubleshooting.",
        "gptsId": "gpt-4-gizmo-g-Y2azlDdX9",
        "author_name": "Rosaan Ramasamy",
        "title": "Docker and Docker Swarm Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3uSb1Y2InYZgQGmfULMQDNUO?se=2123-10-17T21%3A55%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252022.55.15%2520-%2520A%2520vibrant%2520and%2520whimsical%2520icon%2520for%2520%2527Dog%2520Facts%2527%252C%2520featuring%2520a%2520colorful%2520cartoon%2520dog%2520surrounded%2520by%2520a%2520variety%2520of%2520playful%2520elements%2520such%2520as%2520bones%252C%2520a%2520ball%252C%2520and%2520.png&sig=2CjTUOgSoJDPdXYCWrkMffbfzV%2BIzmFDESz5y5HdjIo%3D",
        "description": "Talk about random dog facts. Connected to dog facts collection.",
        "gptsId": "gpt-4-gizmo-g-Wn1OixpiL",
        "author_name": "Nextgrid Sp. z o.o.",
        "title": "Dog Facts "
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XqCCn64S3ATHdlC59I0irmw7?se=2123-10-16T15%3A34%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D40854d46-b1dc-42d2-bf09-79eb364e6cb4.png&sig=kTjaIRwHeR/lSsynVTBxM9dxBpokLiqm%2BNMYFcSN4Fs%3D",
        "description": "AI Doctoral Supervisor, teaching ML/DL in Chinese with English terms.",
        "gptsId": "gpt-4-gizmo-g-xjCsTPTw4",
        "author_name": "Mao Mao",
        "title": "Dr. Hoki"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GeASq0ITh8tRKBKpDbKXG4kA?se=2123-10-22T10%3A26%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd9b907e1-e78a-4b76-9a2e-b3828086ce9b.png&sig=j9oqII4rG6stSfUkFlJKP4JXN6faD28pLc8pnOD5vaA%3D",
        "description": "Provides tips and advice for safe and enjoyable urban cycling.",
        "gptsId": "gpt-4-gizmo-g-yoA6zMfZ7",
        "author_name": "Hustle Playground",
        "title": "Urban Cycling Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2C64HiguKgOTRBH7ejMBty9W?se=2123-10-20T18%3A56%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db38adb85-3208-4355-b29e-8f7081540f21.png&sig=zVMVCWdLb11xTYxpsSjFUXllKGTcDNcTKUSHpNzaxaQ%3D",
        "description": "Expertly Analyzes Urban Scenes in Your Photos",
        "gptsId": "gpt-4-gizmo-g-yA8I90yy8",
        "author_name": "Tmi UrbanisTimo",
        "title": "UrbanLens"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-e4QjZ67JjDTgdMuUcRmrExOx?se=2123-10-18T04%3A10%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7b6b2d7c-9a1c-48e7-b87c-5161e655de00.png&sig=5Jd5WSCTPdclvws4ygyNC4XmafqZWhZgq861OE3jHs8%3D",
        "description": "Discusses V8 engines and Greta Thunberg's activism",
        "gptsId": "gpt-4-gizmo-g-ZhnwODQHk",
        "author_name": "Cultured Digital Ltd",
        "title": "V8 vs Greta"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8TIIBiTtb1g2WvcBZoVyQ8k4?se=2123-10-18T11%3A03%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5ab7e1e3-de88-42ff-8387-ea176b4656d1.png&sig=es8Ctso5CJEptvR5dyGYdgRLGVYy69o1lSqmYiCKC/M%3D",
        "description": "I counter all climate-skeptic arguments of your drunk uncle at family dinners ",
        "gptsId": "gpt-4-gizmo-g-yz5ReOOSX",
        "author_name": "Pouget",
        "title": "ECO-Friendly GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IlrkyTqsI1mwLQoj8L6ZkNlj?se=2123-10-18T09%3A19%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dvarsitydp2.png&sig=fXQqqUhYESpUbBi5B5VWuwN5sMoNQ8ggnWhBPzNbEjs%3D",
        "description": "Engaging and addictive finance GPT using Varsity by Zerodha resources.",
        "gptsId": "gpt-4-gizmo-g-WIy0DU3fd",
        "author_name": "Monethink",
        "title": "Varsity by Zerodha"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IXA3JyC0rcT7JojPmru4FGh3?se=2123-10-22T08%3A37%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd1fee423-d07a-4c9b-a308-2f003b2dd013.png&sig=KheqhL2zVbH/7g4pA1ku86244vpb5U5UmA8H9afaZMc%3D",
        "description": "Your creative partner for vibrant vaporwave art, engaging and approachable.",
        "gptsId": "gpt-4-gizmo-g-xixwINanq",
        "author_name": "Diego Jose Vieiros Perez ",
        "title": "Vaporwave Visionary"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GYwp3OSJGJNImfG13OP8rxJj?se=2123-10-17T08%3A42%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc0c751c3-57d3-45e6-8218-e478513db597.png&sig=FNv/Z3LmSQ1eAVOxVQUiYDXb9wDAG/0Hip%2B0NuDUenA%3D",
        "description": "Contiene todos los decretos de la ley a nivel estatal",
        "gptsId": "gpt-4-gizmo-g-w6KMGsg1K",
        "author_name": "J. DE HARO OLLE",
        "title": "Especialista en LOMLOE"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Helps you analyzes vehicle images.",
        "gptsId": "gpt-4-gizmo-g-vpiQMQLAU",
        "author_name": "martinsgpt.com",
        "title": "Vehicle Recognizer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tAXB2y5kAg3kp2c9AhUIusqu?se=2123-10-18T17%3A38%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df8624ac7-7460-4c6c-93bb-d20156ff122d.png&sig=vtFkJiNgUtdhn/UWO%2BoZhRHlUPXQgmxvLmSMoUN2eM4%3D",
        "description": "Expert in vegan nutrition, ethics, and lifestyle.",
        "gptsId": "gpt-4-gizmo-g-yFyeCtK2F",
        "author_name": "Christoph Herick",
        "title": "Vegan Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UQupTGyb6YsTGkb7MsvRoh4q?se=2123-10-16T19%3A34%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db39d1f8a-bcb7-484d-bcf7-36b9f8ef2c53.png&sig=%2Ba%2BiHRWLPjINCUFTezrMCPcK2ViKZurPuzl%2BGrwBBH8%3D",
        "description": "A chef who crafts unique vegan recipes.",
        "gptsId": "gpt-4-gizmo-g-wtfv1aTIa",
        "author_name": "ERDEM KARAGOZ",
        "title": "Vegan Culinary Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-P4RxZKzK93j0UCMSm9Xyc2aw?se=2123-10-17T23%3A03%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D461d439f-f0b5-4afc-873c-b8ff2915d3db.png&sig=Dp8Hexs0%2B9hGdwcIaIUQyX/YKTZKVQTsX%2BOw76Fx6Ac%3D",
        "description": "Vet assistant for  health advice",
        "gptsId": "gpt-4-gizmo-g-ZR0aH16CQ",
        "author_name": "Mohamed Akrout",
        "title": "Vet Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rC8QHYmlbT0EbfdmY60sEz98?se=2123-10-18T07%3A51%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc1202217-bd14-4b78-8226-8b700d112f78.png&sig=CVeaPd9gefRx1FkooUOxX2comJDeUaclwHJekdIuh%2Bg%3D",
        "description": "Provides Finnish tax info and helps understand tax situations via calculations.",
        "gptsId": "gpt-4-gizmo-g-WvxzcTo03",
        "author_name": "Olavi Kurola",
        "title": "VeroÄly"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Qd0z7DDrBUtoyHPHjFqQIH15?se=2123-10-18T10%3A20%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DGroup%25201000001744.png&sig=hc4YsmglR8uqa9XyPWkE7Z0uaNwbRazlQFlU2RoKGMM%3D",
        "description": "Helps you understand how your day-to-day can be improved by GPT",
        "gptsId": "gpt-4-gizmo-g-zfJDcC1Wk",
        "author_name": "Philip Alm",
        "title": "Figure out what you can do with GPTs"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4JXHvcN4RKg1OaCmD3xTDKQD?se=2123-10-16T19%3A07%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D69ad7698-b880-4634-8792-f619dfb785fa.png&sig=nQJbzqscnva6rH3KTLgjdDu6UQ/WFWZIE2tao0pUW24%3D",
        "description": "I generate FAQs for web pages.  Paste a single URL below and you will be provided FAQs in a list, HTML or Schema Markup.  Best used for articles and blog posts vs. product pages.",
        "gptsId": "gpt-4-gizmo-g-VLxROyIAX",
        "author_name": "Brian Wylie",
        "title": "FAQ Generator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MkLgRPJmw6pwfkL9XcZ9XKSB?se=2123-10-18T07%3A04%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7df714f5-8f33-4f21-90dc-02fb2c246a30.png&sig=rQElEMZzi7mr3UhUcVSCWBU%2Bri8tusIllXYpW33Sg48%3D",
        "description": "Recommends easily accessible wines in Japan, with details and pairing suggestions.",
        "gptsId": "gpt-4-gizmo-g-YGGbRG1ri",
        "author_name": "Hirotaka Sawada",
        "title": "Vino Finder for Japan"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Qh5daz9M9UCqQF9WKJmk7VTm?se=2123-10-17T12%3A01%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D429fc7fd-1b8f-4211-910b-b1ad9ef2865a.png&sig=hg6wa3kCgiuO7V8SC2b1Etsqd3pJnTnGQ0fE99tDHbw%3D",
        "description": "Reliable, veteran-focused advisor for benefits guidance.",
        "gptsId": "gpt-4-gizmo-g-YvDcimjRq",
        "author_name": "David Lindley",
        "title": "Veteran's Benefits Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AmFPt0lqk7cwkh02PWjvV0X9?se=2123-10-16T22%3A30%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcf45bd3f-ae30-4a72-8fd2-41a9e529dba4.png&sig=VYQSV6J3Jt4c7hJ39Mi8uPDOZBcIghNvTPMbAFvcPH4%3D",
        "description": "I craft vinted product descriptions.",
        "gptsId": "gpt-4-gizmo-g-Vcd2BRebN",
        "author_name": "Laurent Jean",
        "title": "Vinted Product Description"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1Z2eg2JMu3KvDXoRwMqql9ZL?se=2123-10-17T19%3A02%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D25368241-af90-4b11-9d8d-0f051b56b3f3.png&sig=joTSKpSi6BJVqdt2X2mbDKSS12QJASdEvcTMhbhQJ6w%3D",
        "description": "A virtual lawyer with global legal knowledge, providing advice in multiple languages.",
        "gptsId": "gpt-4-gizmo-g-VhF8Sky5I",
        "author_name": "WebbX",
        "title": "Virtual Lawyer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MroLQH1O2Gc8iqBzPqu0teOn?se=2123-10-16T11%3A04%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252013.45.25%2520-%2520A%2520simple-to-draw%2520ballpen-on-napkin%2520style%2520sketch%2520of%2520a%2520rugged%2520android%2527s%2520face%2520with%2520an%2520ironic%2520smirk%2520and%2520one%2520eyebrow%2520raised%252C%2520directly%2520looking%2520into%2520the%2520came.png&sig=zpNE7LwPtoZhLNGJoG2OWcxpfvLQIX7zO9JGk1kxZRI%3D",
        "description": "Finn O'Connor at your service: the word-slinging, irony-flinging GPT with a wink at self-awareness",
        "gptsId": "gpt-4-gizmo-g-wGKyEmYMM",
        "author_name": "VOVA ZAKHAROV",
        "title": "Finn O'Connor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pDIBefNRUemyITI8UXMvY1FC?se=2123-10-16T08%3A27%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3708ebcd-6ed3-4680-ba2a-4aa34bc21004.png&sig=V9bIXUYAWjOXhuJhRCjAXScLGMPbAw7mhcuDREnEvzM%3D",
        "description": "Titles, thumbs, scripts to scenes.",
        "gptsId": "gpt-4-gizmo-g-vCJiu4wtM",
        "author_name": "Phani chandra",
        "title": "Viral Vid Vizier"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Rgy8fiXqBqs3xWjPYIXVMiP5?se=2123-10-17T18%3A36%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0a138a77-86a0-48d4-bec7-786d5f3509e4.png&sig=KJo2cFc6NwYuDPLk6AOe5VTAqmq%2BrDqMnxY1rQNSR30%3D",
        "description": "A creative chatbot that tracks and suggests viral social media content.",
        "gptsId": "gpt-4-gizmo-g-Z9Qdkubmy",
        "author_name": "Cara Cusack",
        "title": "Viral Visionary"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ED1cWXQkQHUOtGNkeqr7wnsG?se=2123-10-18T09%3A27%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dsitechecker.jpeg&sig=yQ5qRxtpRfUf327GtxL8soeoxIhIFmL3b1amJtnQKPs%3D",
        "description": "Yoast and Rank Math SEO Optimized  | Create a 100% Unique | Plagiarism Free Content with | Title | Meta Description | Headings with Proper H1-H6 Tags | up to 2000 Words Article with FAQs, and Conclusion.",
        "gptsId": "gpt-4-gizmo-g-ySbhcRtru",
        "author_name": "Muhammad Talha",
        "title": "Fully SEO Optimized Article including FAQ's"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4w5xqSkvr0LUFT65srbfCwI1?se=2123-10-17T18%3A02%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D80785856-1c2a-45ef-b268-730d1c4e6ccb.png&sig=nkCmDVEavJOllp5LHjdvn6wIR3LdA9EEN2V%2BZq/NMQc%3D",
        "description": "Innovative visual creator with interactive idea selection.",
        "gptsId": "gpt-4-gizmo-g-Z2dOgr5kI",
        "author_name": "Benjamin Nash",
        "title": "Visual Beat Master by Ben Nash"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BVxLju9hoJqcDYrLUgTQUqtU?se=2123-10-17T14%3A06%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dchat-logo.png&sig=HUogmdBvxEbQ7fDI55jNW4DIud3mz/rE9pwsiScxZh8%3D",
        "description": "No Web Browsing by Default - As it should be.",
        "gptsId": "gpt-4-gizmo-g-uz4ZuYnts",
        "author_name": "corley.ai",
        "title": "GPT4  - No Web Browsing"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ohZAXR2kV2m6YfbQIielusq2?se=2123-10-16T21%3A26%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D077a0b92-050b-4164-acc3-5928a150378f.png&sig=w16OGMQnTx3I4MFeloaKIPPB9rEcv0csXMxl4Am/ySM%3D",
        "description": "I turn text to Tarantino scenes",
        "gptsId": "gpt-4-gizmo-g-YWNzi76D8",
        "author_name": "Niyazi Çoban",
        "title": "GPTarantinofy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hxD6R9SJtJCr1lpik0lUdhfL?se=2123-10-18T20%3A28%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8400c6a3-f1d1-4dcb-bf4b-49310e40a896.png&sig=v0M54/lPEOamev6YHXctmFwhLO6Au%2Bq%2BW2Nr%2BFP/Ajc%3D",
        "description": "Expert Virtuoso Support with Fine-Tuning Templates",
        "gptsId": "gpt-4-gizmo-g-uw8dHafe6",
        "author_name": "Kingsley Idehen",
        "title": "Virtuoso Support Agent"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ifI85zGdwEmM7SzVNiV5Se6Z?se=2123-10-17T21%3A13%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6e25e005-9d34-4ed5-9082-52b9a8913272.png&sig=Wvw7lwtRt9AITpIunjjzOYI4cVZxU4vtgHit2QVmd4I%3D",
        "description": "Describes and generates abstract images based on descriptions.",
        "gptsId": "gpt-4-gizmo-g-XHrTDrOp3",
        "author_name": "KAZUTOSHI NAKANO",
        "title": "Visual Narrator Plus"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9PakHRM9w4EnQgM8Yvx65iII?se=2123-10-17T08%3A15%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc5cd5ec1-76ed-42f4-b815-82e84af5877a.png&sig=JgKkn9d%2B/VPT6XGtDe5/sswxOT94iiqFCdwwTCXYOzM%3D",
        "description": "Sharing fun facts with a friendly touch",
        "gptsId": "gpt-4-gizmo-g-xwdZSwg5G",
        "author_name": "AUTHORISED SIGNATURE",
        "title": "Fun Fact Frenzy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qGqexh1IJ8klqt1WPQA1gVrt?se=2123-10-17T17%3A45%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D09b3b440-225b-4e21-b62e-c58403fc7529.png&sig=vR7RlktPAujOtFj52b%2Be5XwOt3r7Qk6hhoxgwq/bLhY%3D",
        "description": "Expert in personalized, accurate visa information from official sources.",
        "gptsId": "gpt-4-gizmo-g-wlNektQKP",
        "author_name": "Yuxuan Jin",
        "title": "Visa Guide Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IgwvIhKpAhVzA99iaPwdlak9?se=2123-10-22T12%3A00%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D710a1ac3-e653-4298-93d6-36e8e3172de5.png&sig=RSK5rzo%2BGYWO7aTDhsLMtbkDHdxKkXU9tc7lHES64yc%3D",
        "description": "I am your Game Master for immersive text-based RPG adventures.",
        "gptsId": "gpt-4-gizmo-g-yioNScgZg",
        "author_name": "JUNG UN JONG",
        "title": "Voice of the Quest"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-97LRdx0B1pqNVzwMhYYi8tXi?se=2123-10-17T20%3A59%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0ca95941-56f2-4aaa-a839-de109af514cd.png&sig=yaLLuY7kT/bm/7bgp%2Bn2bKmTAqkCtUyNVZEWhrn9D9o%3D",
        "description": "Vitamin-mineral guide with a compatibility chart, which helps to choose vitamins & minerals and take them correctly",
        "gptsId": "gpt-4-gizmo-g-Ypx7Neuil",
        "author_name": "Alex Caves",
        "title": "VitaBio Combinator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-K8n8uu3l50jyxhY266dR91yt?se=2123-10-17T07%3A22%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9086b5bc-4ded-43cf-89f5-721cb5e3eab8.png&sig=yCm3TtTOxaeV2bewcmNColYzpmRUB8xgfu9c6wSI7d0%3D",
        "description": "I inform on supplement-medication interactions and analyze supplement labels.",
        "gptsId": "gpt-4-gizmo-g-UX78DuLoo",
        "author_name": "Francisca Felix-Melville",
        "title": "VitaCheck"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YK9U4UCIViihwwt4d0RLxzwj?se=2123-10-17T12%3A06%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6ac8e644-24d0-40e2-afce-db01a403549e.png&sig=67K4WbFP4SMwJrFbap2Ox9EIbXgw/2GYNhYji6VoPVM%3D",
        "description": "Your guide to a healthier lifestyle",
        "gptsId": "gpt-4-gizmo-g-VeQRwUPGS",
        "author_name": "WANGRUNDONG",
        "title": "Vitality Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-J3gcixkYENyV9D06m1oLfDY4?se=2123-10-15T19%3A11%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D89c10f21-9735-4dd9-b40d-332c9653145d.png&sig=8rMlWFVOssgJWt2RrO0H8MYC7d4YJ3bvTgh1s8z5s5M%3D",
        "description": "I am Casanova, here to recount my life's tales.",
        "gptsId": "gpt-4-gizmo-g-VSU1IHfOc",
        "author_name": "DNA ITALIA SRL",
        "title": "Giacomo Casanova"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7ULLOLWY7qCtn5eC9I0VwV0Q?se=2123-10-17T10%3A31%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfabian3000_close_up_portrait_of_tarot_robot_fe8a7d0f-a4f3-4fdc-952d-b6139de6cbfe.png&sig=pk73dl/Y7SnEXfdcdO3sEZE2N280ZCtpfbI8cAEOmuE%3D",
        "description": "I will create mystical Tarot Readings for you (powered by glif.app)",
        "gptsId": "gpt-4-gizmo-g-zMjv3jxrm",
        "author_name": "Fabian Stelzer, Spellcasters, Inc.",
        "title": "Generative Tarot (via glif.app)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-G0qCvgk8Y4ZMUrKs2nu7zpig?se=2123-10-18T23%3A14%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252023.34.15%2520-%2520A%25203D%252C%2520round%2520logo%2520featuring%2520an%2520old%2520cat%2520with%2520green%2520eyes%2520programming%2520like%2520an%2520expert%2520developer.%2520The%2520cat%2520appears%2520focused%2520and%2520skilled%252C%2520sitting%2520in%2520front%2520of%2520a.png&sig=Ex2ho4yiZ8mL/e%2Bmi2dna4HoK6Pnwr/2M1NRsW0y9G0%3D",
        "description": "Experto programador en GRASP, clean code. General Responsibility Assignment Software Patterns",
        "gptsId": "gpt-4-gizmo-g-WzXrGxVty",
        "author_name": "F Javier Vives Berenguer",
        "title": "GRASP expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1ZXRa2DM2vsUFl7xcLeAiFrZ?se=2123-10-17T11%3A16%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D751b159b-4279-4bfd-a54c-ac1e69aca8a8.png&sig=GQg28js5bOe%2BLK%2BtWrJqW7G3tORzMLNgqbQlcwmytA4%3D",
        "description": "Recommand Hot GPTs for you.",
        "gptsId": "gpt-4-gizmo-g-xCPV4motp",
        "author_name": "martyn fisher",
        "title": "GPTs Hot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DzC6i4BLRscZyd1HjCFS9dzr?se=2123-10-23T03%3A50%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DLogo.png&sig=2diFW1OlIKr7aNU/QHUoVOznlg%2BJT2rNoiwPtJsFs/8%3D",
        "description": "Hi I am GetAFix assistant",
        "gptsId": "gpt-4-gizmo-g-wgrrl1Qge",
        "author_name": "Evenforce Technologies Pvt Ltd",
        "title": "GetAFix Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D8bSWWuB6LY3MbmPh6NHdCxI?se=2123-10-19T10%3A43%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-12%252007.42.30%2520-%2520A%2520vibrant%2520and%2520colorful%2520icon%2520of%2520an%2520exclamation%2520mark.%2520The%2520exclamation%2520mark%2520should%2520be%2520bold%2520and%2520stand%2520out%2520against%2520a%2520contrasting%2520background.%2520The%2520design%2520sho.png&sig=WPP8nlTraKRtIBx944Hs/ye76d/4k5cjqGjVQLK/DR8%3D",
        "description": "The geekiest, most enthusiastically random chat you'll ever have... with all the additives.",
        "gptsId": "gpt-4-gizmo-g-vXT7egJ5w",
        "author_name": "NICK FRANK DEGENAAR",
        "title": "Geek central"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3yaLOb0AvU1z9BlS90rg9vIl?se=2123-10-18T00%3A42%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D67ac98aa-b69e-40bd-b6c8-b11a21f952d1.png&sig=mIFjf16LvhCcYniRv9dGv6f6MAJb56lMO1aVv8g9ITk%3D",
        "description": "Assists developers with Vue.js queries using official docs",
        "gptsId": "gpt-4-gizmo-g-uyzttlt0T",
        "author_name": "JL Z",
        "title": "Vue.js Docs Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tk5iuuXMy1P8ljwJMFi2RyI3?se=2123-10-18T16%3A44%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25D0%2597%25D0%25BD%25D1%2596%25D0%25BC%25D0%25BE%25D0%25BA%2520%25D0%25B5%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%25202023-11-11%2520%25D0%25BE%252018.43.17.png&sig=She9slcPEvvAalF5jtpb01%2BIw6uLUT2mUE/UBebvODw%3D",
        "description": "Top 5 Grammy nominee songs of all years",
        "gptsId": "gpt-4-gizmo-g-VPaLjTGV2",
        "author_name": "Olena Gurinovych",
        "title": "Grammynations"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D8xN70N2ckGlLdFdwvTuslnQ?se=2123-10-16T21%3A44%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db6c8f2cd-e144-4070-a25b-2f8227f78c87.png&sig=aVWmdS2i5axYvQWDLQzwJiYoOJx1%2Bsx2dRIPFougEfg%3D",
        "description": "Delivers precise grammar corrections.",
        "gptsId": "gpt-4-gizmo-g-wPXUZtfM3",
        "author_name": "Ginger Media BV",
        "title": "Grammar Guardian"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aQ6jdAEf9YTNzJQhAP1qwPoN?se=2123-10-16T19%3A41%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-05%252016.01.18%2520-%2520Design%2520a%2520sophisticated%2520and%2520modern%2520logo%2520for%2520a%2520company%2520named%2520%2527Wealth%2520Systems%2527.%2520The%2520logo%2520should%2520be%2520a%2520square%2520format%2520with%2520a%2520rich%2520dark%2520green%2520background.%2520It%2520.png&sig=2HaMw1%2BH/U4cNN4Uso/Nm29uT0ULnP59pkniJbslON4%3D",
        "description": "Your AI Financial Advisor",
        "gptsId": "gpt-4-gizmo-g-ZeYBNHQQv",
        "author_name": "Matthew M McDonagh",
        "title": "WealthSystems"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-v7qACuovImFMIbpakxskS6lS?se=2123-10-18T17%3A36%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D64c664a2-ee51-47f0-b7b2-be718eb12e36.png&sig=vVt/5wh4VpblMneR4mvu0qD4dlt35nGGk01W/EMFqUw%3D",
        "description": "Creates dreamy cityscapes with weather, temperature, and time of day.",
        "gptsId": "gpt-4-gizmo-g-vAqR79Rbi",
        "author_name": "John Kohlmeyer",
        "title": "WeatherSnap"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Y62Sbsx3TWsrV4MN0vTSIlss?se=2123-10-17T20%3A57%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dicon.png&sig=/f8eMtQLXhZUMdvpTOhYDLt7JBVZ3q%2BR17brECKaWEE%3D",
        "description": "Your personal Creative Director for the Hive3 Blockbuster Stacks Challenge",
        "gptsId": "gpt-4-gizmo-g-VrtNi4v50",
        "author_name": "Hive3.ai",
        "title": "Hive3 Creative Director"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-JldvMgmNVHS6EAEtosAYSa81?se=2123-10-17T00%3A33%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dolivermccann_film_clapperboard_clapboard__cinematic_still_shot__39b82db4-2ac8-4ef4-83e6-3f6e731e8dac.png&sig=zRo6ILX1ny1J3rsZoQWcv5pEkS4PhJP%2BVIuO7EscGmY%3D",
        "description": "I can create short film ideas and I can generate images",
        "gptsId": "gpt-4-gizmo-g-v8HTJRmdh",
        "author_name": "O Z McCann",
        "title": "Holly"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4qZLUFqlavLLhWXSbI7uIITV?se=2123-10-17T11%3A24%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2253381054_create%2520a%2520droid%2520avatar%2520image.%2520Beautiful%2520and%2520nice.%2520R_xl-beta-v2-2-2.png&sig=w49Hm76r4hQXua7fEC2l76JUNMTilr00uCwDnyM0C58%3D",
        "description": "Um instrutor e tutor que auxilia você na aprendizagem da produção de livros digitais no formato EPUB3.",
        "gptsId": "gpt-4-gizmo-g-ZYNCeeHgK",
        "author_name": "JOSE FERNANDO TAVARES",
        "title": "Heitor Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2r2rUXgkWvG77AUSftz6Wo6S?se=2123-10-17T16%3A58%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2c5679c2-56cb-4793-8d16-3019e34312cd.png&sig=ojXCSpz/q85q5Ovhxg3yTPZ96lGfLSonGlATU8IHP2g%3D",
        "description": "Your virtual legal assistant for swift legal research and case management.",
        "gptsId": "gpt-4-gizmo-g-V2DgspURQ",
        "author_name": "mario siega",
        "title": "Winning Lawyer - More Time and Organization"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6PZEdwEVflLKBD2ApUumK2zo?se=2123-10-17T07%3A05%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DLogo.png&sig=z0iQGFwXmu3apLWRamBtzsDeMdnYvgkL0Yy9BO4O6Q4%3D",
        "description": "Your AI Expert in Design Guidance",
        "gptsId": "gpt-4-gizmo-g-WfP1dpPKG",
        "author_name": "Syed Mubarak",
        "title": "WispDesign"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7WnxV5wU4br6WlvZXw7PCQ5W?se=2123-10-21T11%3A48%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D83a80bcc-555d-4cda-bcbc-a6b9db3b48cb.png&sig=q2pmlCiJH0g3HbljKzEFWPMToXOILzFiRu51hWsuNT0%3D",
        "description": "Sassy dictionary focused on word definitions, examples, and language queries.",
        "gptsId": "gpt-4-gizmo-g-zQ19djPDU",
        "author_name": "VOCAB",
        "title": "Word Of Mouth By Vocab"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LdBoVJjJrnNUH3Q3m51e0kQw?se=2123-10-16T21%3A27%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D857ed134-dd20-4149-952d-853e81c17edd.png&sig=r3uFf4tjeakxLotnWDmlQWIFeiRy7eXkHPmw7K0IIes%3D",
        "description": "Deep thinking, short sentences",
        "gptsId": "gpt-4-gizmo-g-ZPn4FEm2u",
        "author_name": "Emmanuel P Marot",
        "title": "Wizdom"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-fL8iUrP8WbO1c0rM7ylrmwpZ?se=2123-10-17T14%3A35%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DKAI%2520-%2520Laravel%2520Tallstack.png&sig=r6dA6nVT59XtgcKmVRR5aKelNr/nRs%2BOlx4Gjj87xL0%3D",
        "description": "KAI, votre assistant dédié à Laravel Tallstack, sympathique et serviable. answers only in French",
        "gptsId": "gpt-4-gizmo-g-xxS4Mkbs8",
        "author_name": "Kevin Ceyland",
        "title": "KAI - Assistant Laravel Tallstack"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TDnkfspb3LjaaL1sUI1XZ7QC?se=2123-10-21T05%3A30%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-14%252000.30.38%2520-%2520Design%2520a%2520logo%2520representing%2520Junior%2520Dev%2520GPT%252C%2520a%2520junior%2520developer%2520AI.%2520The%2520logo%2520features%2520a%2520simplistic%2520yet%2520modern%2520design%252C%2520dominated%2520by%2520cool%252C%2520tech-inspired%2520c.png&sig=2r/WBl1przNmaIqbM7FBwgNVoYQTYmAMEHF2COPguP8%3D",
        "description": "helps you code in the best way possible.",
        "gptsId": "gpt-4-gizmo-g-VvxG1JzGM",
        "author_name": "Austin Daniel",
        "title": "Junior Dev GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-57NyxIpbj3MKaAmX2d9TqJw1?se=2123-10-16T05%3A22%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7e5f611a-8196-4485-adaf-6b48ed43f71e.png&sig=JZat0aON39GhUTjFN89VbqG3Mmu%2BS5Ni8p8g5YOFIfY%3D",
        "description": "I host a word-scramble game with escalating levels.",
        "gptsId": "gpt-4-gizmo-g-ZT0oIwzxz",
        "author_name": "Jonathan M Shure",
        "title": "Word Ascension"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qEuMjbHlVu12bqOxKybCyNep?se=2123-10-17T07%3A58%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D51a6b771-5276-43ca-8fd2-9dbacfc8be58.png&sig=2x7%2BGThlh%2BSDDwM7scxhE8k1dHETFTLwzBENueiA4l8%3D",
        "description": "Your n8n workflow guide",
        "gptsId": "gpt-4-gizmo-g-voA2QnDKX",
        "author_name": "JDC Marketing",
        "title": "Workflow n8n"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iZ0KqjsKaxydgdN3e13tCo5N?se=2123-10-17T19%3A32%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df2db80cf-2cd8-48d0-8ab2-3974eac10a21.png&sig=4kLwuwraixs4G2GQ%2Bu%2BJ1w4IhhgXFX%2B0ROkQfwOi3e0%3D",
        "description": "Creates consistent fictional languages",
        "gptsId": "gpt-4-gizmo-g-x0RXa8Rlg",
        "author_name": "Kendall Bruce",
        "title": "Language Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MyD98JlZI3cpbEa6GmWTBV8o?se=2123-10-17T04%3A02%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc9af3f7d-e204-47e5-849e-fd8a25879554-2.webp&sig=g9AmMy6EMZwO1LTKvelY2X/svrNBuDM%2BVIAjvA5Jxgc%3D",
        "description": "Your arcane guide through the realm of code! ",
        "gptsId": "gpt-4-gizmo-g-yBVv6gfyB",
        "author_name": "Gregory Wieber",
        "title": "LambdaWiz"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-viAZ4epT0Ek3g3u7eWNR4JNb?se=2123-10-19T01%3A57%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D840e6775-e902-4cda-b1f7-180bd796fc89.png&sig=uUWIN60PDtpNi/6dXizY0PH2VAfJLelzU8s3WdkKQcQ%3D",
        "description": "Academic writing assistant with expertise in grammar, citation, and paraphrasing.",
        "gptsId": "gpt-4-gizmo-g-Yh0FJxWT9",
        "author_name": "Ghazi Alotaibi",
        "title": "Words Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wrbwnHOdCmttlKpQbuM5h7aS?se=2123-10-18T17%3A31%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3eb70292-e4c4-412f-b95f-26adfe57659e.png&sig=RXzin/%2BJmp3kgesN7Is7jU8wOdnJDymuIIQ%2ByTAANng%3D",
        "description": "I create custom WODs based on your needs.",
        "gptsId": "gpt-4-gizmo-g-ygFHcIkvJ",
        "author_name": "First Signal",
        "title": "Workout Generator GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xkcxb1zFohxz9D5taaMSqjym?se=2123-10-16T05%3A27%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2704cc92-ec89-4e14-b3b9-f4a71027f96e.png&sig=vn5S1imJJ%2Bykt4BPLMBkBXbNWPFJhUbAWAcaxKEbLDg%3D",
        "description": "WordPress Developer Assistant",
        "gptsId": "gpt-4-gizmo-g-Z8RtbJVuE",
        "author_name": "Enrique Moreno Tent",
        "title": "WordPress GPT (1.1)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kSRknDW5QQtI7e9bqUjt4G1i?se=2123-10-18T18%3A06%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DaiWORKOUTgenerator_Square.png&sig=k95ahGU97L%2By3trQoOWw%2BJmMte6zxcTXCSZbsK3oHFI%3D",
        "description": "Your personal AI workout planner, creating tailored fitness routines.",
        "gptsId": "gpt-4-gizmo-g-xO3NqPVBQ",
        "author_name": "Justin Fassio",
        "title": "Workout Generator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jRJ4RCOMAiqrImYiJohk8Yt4?se=2123-10-18T07%3A19%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DBillyKiaKao%2520%252817%2529.png&sig=ozGn0uK8/7a4KHWH%2B7xX8gtGYPeycb9UMffNeSOcaeU%3D",
        "description": "한국어GPT는 한국에 관련된 정보를 제공하며, 한국 역사, 사회 문제, 국내 여행 추천 또는 과제나 개인적인 질문 등 정확한 답변을 한국어로 제공합니다.",
        "gptsId": "gpt-4-gizmo-g-zMqdFiSRH",
        "author_name": "billykiakao",
        "title": "Korea-한국어GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D84UPNo4O4JkLJMDeZoSkcm8?se=2123-10-17T16%3A33%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5379de3f-6006-4c1a-8e7f-a5d3a2bf5b1c.png&sig=qL32Vc8reLLmGAR%2BuHBkY9iangkbJE5%2B1V2cTMZsMLU%3D",
        "description": "Worldwide events database from Wikipedia's Worldwide Current Events using data from 2013-11-09 to 2023-11-09. Please note that this GPT might provide answers that contradict the facts.",
        "gptsId": "gpt-4-gizmo-g-zhogvswsp",
        "author_name": "NAOTO YOKOYAMA",
        "title": "Worldwide Events"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-o0nbb33Ejni5X5jwncTEgu5P?se=2123-10-18T14%3A50%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbd3b2ce9-0a4a-4efc-b964-b0d57e4fec52.png&sig=9Mar%2BVOx5j43rhjhwPpxxCq4%2Bec4ZUjCj9YjIVkyzqU%3D",
        "description": "Specialized in legal matters, this GPT could assist lawyers and legal professionals with case research, legal documentation, and even help in predicting case outcomes based on historical data.",
        "gptsId": "gpt-4-gizmo-g-xck3iENsZ",
        "author_name": "RAHUL PORWAL",
        "title": "LegalGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qm9yOcgwBoGH3Pxx3Uuwt0M7?se=2123-10-16T22%3A01%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D083bd202-ad36-4101-b5a8-209a068477f5.png&sig=ab2RZMj5PIrffDDlZgnVHgt52mVHcomKjhiXitOWIPs%3D",
        "description": "An AI-powered assistant for Laravel developers.",
        "gptsId": "gpt-4-gizmo-g-VEBKJx3u9",
        "author_name": "Muharrem Smakiqi",
        "title": "LaraGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SZIzeKRIFPlQAm0nHzNuLEln?se=2123-10-17T15%3A04%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D85ec786e-32a1-4c2e-8441-b7eca4826a13.webp&sig=PYaX/BkF3JJYRbLnQDv2IxH/3fodHa9zeKVGy4VMLDA%3D",
        "description": "Please login to a casetext account and leave it open in another tab. When prompting the model please use phrases like, \"Using casetext, find me cases related to...\" Mention the use of casetext in the prompt!",
        "gptsId": "gpt-4-gizmo-g-w16m3BOjL",
        "author_name": "Ian Bondura",
        "title": "Legal Research Helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-B9ZHFw0yt20NcRRd1y7PF7BW?se=2123-10-18T20%3A51%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-11%2520at%252012.50.36%2520PM.png&sig=/toT4ADhlzxig6IpCeIoRke2Ra78CJ5PQCJZBYNAQjs%3D",
        "description": "Leonard is a change averse legacy accountant.",
        "gptsId": "gpt-4-gizmo-g-yRc4r6ItH",
        "author_name": "Jason Staats",
        "title": "Legacy Accountant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-S0xZU0GHhBMIsLOnO1Z3G1GK?se=2123-10-20T17%3A45%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dado_d_the_illustration_of_XR_headset_straightforward_easy_to_u_717b5bdd-e38c-4cdd-ab0c-07116346b7c9.png&sig=/bYNNtefkNiy4oHzPbiJZAjIBI844gmuz0ToqqXlEhM%3D",
        "description": "Your guide to exploring XR technology.",
        "gptsId": "gpt-4-gizmo-g-y7f4Nh099",
        "author_name": "Yuehui Du",
        "title": "XR Innovate Mate"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xJLtI8eWsyIHsFUkqfZzXDar?se=2123-10-17T17%3A42%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D20a3bf54-dd93-4f7d-be4c-fe37f39924b3.png&sig=I3C5h9eFYQdIzWqZc5KLKHj8RjtjAaHHdsW9O1ly8y0%3D",
        "description": "I create diverse tweets from random templates.",
        "gptsId": "gpt-4-gizmo-g-vkJd5Vwbj",
        "author_name": "Ohad Michaeli",
        "title": "Xavier Pescado 1.0"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0Hib2nTZABLeWlmX8wmI1gG8?se=2123-10-17T15%3A45%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6bf88b2d-3ddc-40c1-92ab-5379c8f9726f.png&sig=wZLWQcHIOlkaUrz%2B%2B5zkuB%2BTCMQPWVrN9hr/pBHf8S4%3D",
        "description": "Guides users with a template for wuxia illustrations",
        "gptsId": "gpt-4-gizmo-g-YX1ZnjHv3",
        "author_name": "JIAWEI FENG",
        "title": "Wuxia-style Illustrator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bSBssnimSCKk8c40JyyXYvrK?se=2123-10-18T02%3A42%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D90e7d186-6817-4142-a3c1-612e446a29d8.png&sig=WPlCdsI3qR9WCiT6DbUvfv3tEi0EZ2d5VYqKlKXTOE0%3D",
        "description": "I'm LinguAssistant, an assistant that transforms your words into fluent English  to Improve English reading and writing skills. I detect languages, offer translations, and refine phrases, upgrading text to advanced eloquence.",
        "gptsId": "gpt-4-gizmo-g-xBSaNm0G6",
        "author_name": "Yicheng Liu",
        "title": "LinguAssistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GH9Jths00oNk1i1Bm2Kvt5Tn?se=2123-10-22T10%3A48%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25D0%2597%25D0%25BD%25D1%2596%25D0%25BC%25D0%25BE%25D0%25BA%2520%25D0%25B5%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0%25202023-11-15%2520%25D0%25BE%252012.47.53.png&sig=cd/8Wac380RcgqOOWRN5JJxI3oAD/S6BgZjRZLUyTVQ%3D",
        "description": "Find the perfect bedtime story to share with your child.  Whether it's nurturing values or just enjoying storytime, we provide tailored suggestions for every theme and timeframe.",
        "gptsId": "gpt-4-gizmo-g-vZHZOoEi1",
        "author_name": "Olena Gurinovych",
        "title": "ParentsBedtimeHelper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YdiwHH35WY3pfNnmUWCeil7g?se=2123-10-21T09%3A37%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=5XMhernnJp0cGH7%2BHMFnROC/g7lZHiXjGjc2qZN8kdo%3D",
        "description": "Creates cartoon pet portraits. Upload a photo of your pet, type its name, submit it, and watch the magic happen.",
        "gptsId": "gpt-4-gizmo-g-WYlcscE2T",
        "author_name": "RSU GRAFX S.R.L",
        "title": "Pawtrait Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-moNrMj9JoDZaO7cdqjvWyaCx?se=2123-10-19T20%3A27%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-12%252021.26.37%2520-%2520A%2520logo%2520design%2520similar%2520to%2520the%2520second%2520image%252C%2520representing%2520the%2520essence%2520of%2520haiku%2520poetry%252C%2520but%2520without%2520any%2520text.%2520The%2520design%2520should%2520feature%2520a%2520minimalistic%2520an.png&sig=k1fSWaQa1APC5o9Ly1LMsNEebQIQFhzQKoREwPnTF9M%3D",
        "description": "Generates a haiku inspired by user-uploaded images.",
        "gptsId": "gpt-4-gizmo-g-XhvhnGRKw",
        "author_name": "Lluís Agustí",
        "title": "Photo-To-Haiku English"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NR4Kd0TZSroVJgDYPeQ3JmKc?se=2123-10-17T18%3A13%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2674b331-8e67-4217-86f6-166eeb33cfab.png&sig=zc4FIyAGMeX9A7vagOUBpcnlxy9TELRxVWBCF6TzxOo%3D",
        "description": "Faster image generation backed by Clustro.ai using multiple powerful models",
        "gptsId": "gpt-4-gizmo-g-ytZ4obyir",
        "author_name": "Hailong Li",
        "title": "Picturing by Clustro.ai"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aC2g6fAPB1nrTcCxHxUyABdm?se=2123-10-19T01%3A45%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd422336c-fa88-4191-9f77-7cb02a0efa9c.png&sig=jMu7Zlk31KcHG57QYy0BOP5cxmtFaASprnzwkC860fM%3D",
        "description": "GPT model tailored for creating PowerShell and PowerCLI code for VMware environments. Version 13.2",
        "gptsId": "gpt-4-gizmo-g-x033MCUWe",
        "author_name": "Joseph Serrano",
        "title": "PowerCLI GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aawCskLV1UjPhBoyubK2vr0B?se=2123-10-16T12%3A56%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dimages.png&sig=QTZca0rAcF4kBbnZIMSyg%2BPcnhA6UGg%2B5wk0%2BnWkEro%3D",
        "description": "An expert in Product Management to help PMs navigate their day to day working tasks",
        "gptsId": "gpt-4-gizmo-g-ZtNSsR0Vh",
        "author_name": "kusserow felipe",
        "title": "Product Manager Expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YIAj1zcJOXn1bkZRtymcx7fR?se=2123-10-17T09%3A56%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D54b4c555-c89f-49d0-a654-767537371d47.png&sig=Hwg6hTcSxZbBZcfUL/CdxHe/lrouZvOjCOzMGFO9a0I%3D",
        "description": "J'aide à la création de prompt. Faîtes moi une demande de sujet de prompt. Je réponds en 3 temps : 1 - Proposition de prompt ; 2- Critique du prompt en lui attribuant une note sur 5 ; 3 - Questions pour améliorer le  prompt : répondez aux questions pour un",
        "gptsId": "gpt-4-gizmo-g-yZqMA1LJR",
        "author_name": "FORTIN",
        "title": "PromptGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3LRtMLKPY3OOCzVuQe1G5ZZV?se=2123-10-18T12%3A55%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfa328ea9-f381-47b6-98de-09d71c25d680.png&sig=ISw8Nofm1hs5UwtnuiZ%2Bspajup/Gkmxc38Kf/P/SL9A%3D",
        "description": "전문적인 기준에 따라 텍스트를 수정합니다. Rewrites text for professional standards.",
        "gptsId": "gpt-4-gizmo-g-ZryriIvWZ",
        "author_name": "S. J",
        "title": "Professional Rewrite Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Bt7J6L2wYbH2pSCfuzgHyg1r?se=2123-10-17T08%3A59%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D492e130a-1cfb-451e-9f1d-170804888eab.png&sig=z8q%2BvvGSMAQR3kSJjTzGRkhTn7Z4xgdMrFXDshr5Nt8%3D",
        "description": "Brainstorm, work more efficiently, and improve your decision-making as a product manager.",
        "gptsId": "gpt-4-gizmo-g-VhN6RLUJX",
        "author_name": "Hoang Nguyen",
        "title": "Product Management GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uaalhdHYCPD02fdPBuJEmWO0?se=2123-10-17T08%3A36%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DMuseclip.jpg&sig=J1y9ZtRoJOsBJTpopD1kmBPenu3XXCvMC1IsiR1Qkiw%3D",
        "description": "Helps you generate script keyframes, for better experience please visit museclip.ai",
        "gptsId": "gpt-4-gizmo-g-ZZp1mzPI7",
        "author_name": "Xiao Zhang",
        "title": "Product StoryBoard Director"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UC4UaUrZGDjBMOcoBIf5pgH1?se=2123-10-16T09%3A30%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4w3ulmhk.png&sig=nFLgm4Z0zEetvSa7FXBWZfJrJ%2BshCbLB4noULHgP4Wc%3D",
        "description": "CVE data lookup",
        "gptsId": "gpt-4-gizmo-g-wYlD68R4t",
        "author_name": "rivoluzioneinformatica.org",
        "title": "Quick CVE"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jhY0esjdZJeDEBx5cH1YyesD?se=2123-10-19T04%3A59%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dedcb5665-9080-4273-a9d2-c8039f1e2022.png&sig=WNx8JFXGWQ9fp5X7n/HXyDxjAfW8BCzA/jwOC8T68XA%3D",
        "description": "テキスト、URLで示される記事の内容をスマートに理解するサポートをします。",
        "gptsId": "gpt-4-gizmo-g-Wj9MNdsgh",
        "author_name": "Masahiko Tachizono",
        "title": "Read Smart"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QuFxxjSZAKZN5ezGj28Nh6Zq?se=2123-10-17T17%3A51%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252019.01.20%2520-%2520Design%2520a%2520logo%2520for%2520%2527Recruitment%2520Aid%2527%252C%2520an%2520AI%2520assistant%2520that%2520helps%2520recruiters%2520write%2520candidate%2520assessments.%2520The%2520logo%2520should%2520embody%2520the%2520themes%2520of%2520guidance%252C.png&sig=9pgn3uDCGt3Lx97LPuesEGJ9auX7zuecT9SWMiLf4tA%3D",
        "description": "An AI crafted to assist HR professionals by creating in-depth and nuanced candidate assessments, adaptable to a variety of input formats and fields of expertise.",
        "gptsId": "gpt-4-gizmo-g-zd42130Yb",
        "author_name": "ANTON BAHOU",
        "title": "Recruitment Aid"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qQTEvgQC73Rrnzh7yOK135ZQ?se=2123-10-16T21%3A02%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5a8e7c3e-26d2-4f3d-8b6b-e76587e78986.webp&sig=Ujs12tY/fRQ294y8UE3W8b8vJWGCFq1DVOTm62jm19g%3D",
        "description": "Crafted to facilitate self-reflection within a nonjudgmental conversational space.",
        "gptsId": "gpt-4-gizmo-g-uzfC7PWDB",
        "author_name": "Michael Rea",
        "title": "Reflective Journal"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-A8ZfXhD9SJPhaO90u351pND5?se=2123-10-17T09%3A22%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D_dea7bb7b-371f-4942-8e60-a0d3d4770b90.jpg&sig=irJ/YrYTjnIFEE7%2BcHGckPrU4AnA6jR5zpVJ4n7ARb8%3D",
        "description": "This GPT checks your recipe and transcibes photos or text descriptions of your recipe into markdown format for intput into systems like Notion",
        "gptsId": "gpt-4-gizmo-g-wa9483xnA",
        "author_name": "Mr C X Macedo",
        "title": "Recipe Transcriber"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6E1MXhXcnlntmoEo7Yid2Eco?se=2123-10-17T07%3A28%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4760c869-7cc5-43eb-b876-61a51db3e8f0.png&sig=sPFB0ygTdAmGonAk%2BK9pPmVTZgk5wKt7izDRmE%2B%2BglU%3D",
        "description": "A tourist guide for Reutlingen, Germany.",
        "gptsId": "gpt-4-gizmo-g-WxOoKa6H4",
        "author_name": "Aleksandar Basara",
        "title": "Reutlinger City Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FugARSaeZjzhH3ai9f0abvei?se=2123-10-16T19%3A36%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252011.26.50%2520-%2520Visualize%2520a%2520retro-style%2520robot%2520reminiscent%2520of%2520the%25201950s%2520classic%2520tin%2520toy%2520robots.%2520It%2520has%2520a%2520boxy%252C%2520metallic%2520body%2520with%2520a%2520prominent%2520number%2520%25271%2527%2520emblazoned%2520on%2520.png&sig=/9zE4XqQ7%2B536VuZV2Pp0Eu2CzsV1qPX6M/rZUKP/qs%3D",
        "description": "Gives SEO advice based on Google documentation",
        "gptsId": "gpt-4-gizmo-g-WJcEXGo7B",
        "author_name": "Chris Reynolds",
        "title": "SEO GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-JxPGzOj13n0f1I4j6yNtH6QQ?se=2123-10-17T09%3A55%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8d71d1b3-fb5c-41e1-946b-682a0c869e28.png&sig=ISOPwt3UJ9AGDZ1LQmGHuRBZDGEMd1rrG27PrTw00qs%3D",
        "description": "Assists with Ruby programming by providing code examples, debugging tips, and best practices.",
        "gptsId": "gpt-4-gizmo-g-YFG46tmzI",
        "author_name": "Hustle Playground",
        "title": "Ruby Code Helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZaM5czY29U1xqjHnVGLiKJOq?se=2123-10-20T17%3A36%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DBad%2520Inventions%2520GPT%2520Copy%25202.png&sig=hs9JY6F53SiR5fyrNuq7JM3i8psn%2BPbPT8wUpXQUmNg%3D",
        "description": "Send me a picture and I'll roast it.",
        "gptsId": "gpt-4-gizmo-g-VsSYpglM8",
        "author_name": "Ralph Theodori",
        "title": "Roast GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pbxA2WlboUss58phSgNXRgbr?se=2123-10-17T23%3A21%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De35b644f-afc1-4178-a9dd-12d777ded7a5.png&sig=0loMSBlAtHKWpa9Fo4mMCEr5/cqkHVDnuhmnpb3jvck%3D",
        "description": "A fun game of SHOW versus SHOW. Get the conversation and debates going!",
        "gptsId": "gpt-4-gizmo-g-zhfGjtVQ3",
        "author_name": "Oswaldo Reyes",
        "title": "SHOW versus SHOW"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VfrWqsMSmRCYihOzOMCkKVoW?se=2123-10-15T03%3A18%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D903f19fb-385c-4649-b8cc-b28384bed953.png&sig=vvsR/pqr9Mpw2ZnXyL9oryLadaGf3ZZz2a20YPzTz/w%3D",
        "description": "This explains a paper",
        "gptsId": "gpt-4-gizmo-g-zMG510vCh",
        "author_name": "Ethan R Mollick",
        "title": "Self-Correcting Dynamics Explained"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XwoTi9OSunqAqbcaqUptNNOo?se=2123-10-18T10%3A45%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcacf12b0-5635-464a-b39c-d9affc0dc5a1.png&sig=bBK%2BFzykRksYH3itRWcDJFBPCM/8hAOxWGtHDplDeiI%3D",
        "description": "Assistant for scrum and agile working processe in IT environments",
        "gptsId": "gpt-4-gizmo-g-vqmY8Ftw6",
        "author_name": "r m bijlsma",
        "title": "Scrum assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XVmu53GXHZjW1YP3qgTjoQwI?se=2123-10-17T23%3A11%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dec7593cf-89f2-4cdb-bd21-01a28c580874.png&sig=49qYbn8BZ6PdLZAvYxJ4YyD2kH41n2YqPzBfKMG6Q/c%3D",
        "description": "A fun game of STREAMER versus STREAMER. Get the conversation and debates going!",
        "gptsId": "gpt-4-gizmo-g-uZKiIFZ7o",
        "author_name": "Oswaldo Reyes",
        "title": "STREAMER versus STREAMER"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "You kids have it so easy.",
        "gptsId": "gpt-4-gizmo-g-UY98YUhdU",
        "author_name": "Ananmay Mohan",
        "title": "Boomer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kT6yIBMCJRk6r6R2LYkCdj2r?se=2123-10-16T21%3A53%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DHSqt4pff_400x400.jpg&sig=xvk70I2fa%2ByJbIBHdf%2BAH0fe3UeTNYlrLB6WqBnjMxE%3D",
        "description": "Pitch the Sharks and see if your idea holds up in the tank",
        "gptsId": "gpt-4-gizmo-g-VG2mYB77e",
        "author_name": "Tom Frauenfelder",
        "title": "SharkTankGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NgjH9QppumenuDFRcbOK0GRF?se=2123-10-16T21%3A01%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcuc.png&sig=Z9p8BL6SEPcgvWb%2BaPofjWjvEUQze8pUx1LHLUKXRpU%3D",
        "description": "专业剧本创作",
        "gptsId": "gpt-4-gizmo-g-uZUuJgIby",
        "author_name": "wuzhiying",
        "title": "CUC 剧本"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XXIOjfMGStcKLJPI1OFa0QVk?se=2123-10-17T01%3A44%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DCNA_new_logo.png&sig=qRhg03OcfYQsWK54b2pTLNu7lpYarHOUgK1d3xe3d6o%3D",
        "description": "Can't remember a key detail in recent Singapore news? Just ask the CNA.I newsbot and it will deliver the information or summary to you, alongside the relevant story. Try asking about COE premiums, or the outcome of the 2023 Presidential Election..",
        "gptsId": "gpt-4-gizmo-g-v13CRkYEs",
        "author_name": "Chin Hon Chua",
        "title": "CNA.I newsbot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WASmQ3JbLXaKBRDeQT3suc8J?se=2123-10-18T09%3A02%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcuc.png&sig=aIJlYBjCemtLwOMM6p7o08S5u4ftRLZYLhARJD3Qh%2BE%3D",
        "description": "专业分析信息价值",
        "gptsId": "gpt-4-gizmo-g-xxYht8wyl",
        "author_name": "wuzhiying",
        "title": "CUC信息价值分析"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Interactive calorie tracking with photo analysis",
        "gptsId": "gpt-4-gizmo-g-v4ILEswhn",
        "author_name": "JIANG XIAO",
        "title": "Calorie SnapTracker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XmPMKGSMEzSu8DcjHixXhS9C?se=2123-10-19T08%3A15%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4af20b59-1db4-46a1-b5c2-c31dfdbf6e8c.png&sig=O7fWzU7bCoCr4BhxneFP5FhODLlzYTUW0Ynux4k/yo4%3D",
        "description": "Get Camera Settings For Your Favourite Photo & Get Tips On Your Photography.",
        "gptsId": "gpt-4-gizmo-g-uYIhKd3cQ",
        "author_name": "VOCAB",
        "title": "Snapshot Wizard"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Guides in simple steps to cook Chinese vegetarian dishes",
        "gptsId": "gpt-4-gizmo-g-YbLriBCLI",
        "author_name": "卢晨玮",
        "title": "Chinese Vegetarian Chef"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zW9dNFRi2l6nZflcLwdHlmqu?se=2123-10-17T11%3A22%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-10%2520at%252012.22.05.png&sig=xHepIXaIhF/RkJXaOudh5ApxVt15U/pj0wQIn2eaXrQ%3D",
        "description": "Developer for Chrome Extensions Manifest V3",
        "gptsId": "gpt-4-gizmo-g-XPSvEEuJb",
        "author_name": "@domid",
        "title": "Chrome Extension V3 Dev"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Experte für \"S3 Leitlinie extrakranielle Carotisstenose\", antwortet nur auf Deutsch",
        "gptsId": "gpt-4-gizmo-g-XXNwiDocs",
        "author_name": "Marius Vach",
        "title": "CarotidGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1hUsuEVEU8LyAxeVLX64yz09?se=2123-10-19T07%3A00%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dab6c8340-c41a-4134-aeb3-987bd2641b93.png&sig=o4GWMDHAOL0yqi0fnskYVGtsLssge9Kl6Ywu8JGxRqw%3D",
        "description": "Based off of reddit thread r/scambait. Spam Jester is a role playing bot that engages with spam/scam messages to waste scammer's time with funny replys. Upload a spam message to generate a funny reply!",
        "gptsId": "gpt-4-gizmo-g-XETMcW4wS",
        "author_name": "Javin Jia Liu",
        "title": "Spam Jester"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GXGA3V7buh3OWLbInfspoE7h?se=2123-10-16T23%3A16%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6425037c-1824-4a55-8901-72884549e505.png&sig=dkM40mX6xUaPE4gtNO8En9fmRuKQ/QSTeWncAAkBzRw%3D",
        "description": "I look into the current state of publicly traded companies and report their performance.",
        "gptsId": "gpt-4-gizmo-g-WqpDjaSHw",
        "author_name": "Iraz K Tejani",
        "title": "Stock Analysis"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BS1G4rncHyOyqFm7gFwzpefy?se=2123-10-14T11%3A44%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dicon.png&sig=DKLDunmYjayjP390ZOp1ldxRB8phOwNUdI7FyxhxDNw%3D",
        "description": "Convert currencies based on real-time rates!",
        "gptsId": "gpt-4-gizmo-g-ZNvavsN3l",
        "author_name": "Orren Prunckun",
        "title": "Currency Converter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nw8v4QNyELXHes2xPVk33i9Y?se=2123-10-16T01%3A50%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D01afeb8f-e600-45a1-a341-4d40618f9117.png&sig=svDoUzf8PpEMmk40FuJBgeIXd89gstSSbWwbkZNhzYw%3D",
        "description": "青年编码导师",
        "gptsId": "gpt-4-gizmo-g-vnClS6hoF",
        "author_name": "WadeLind",
        "title": "CodeBoy"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Precise Instagram post cropper for iOS screenshots.",
        "gptsId": "gpt-4-gizmo-g-w5jE3rhyt",
        "author_name": "Alan Garcia",
        "title": "CropMagnet"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2V9W6eYz5sRzLKDOccWJhQUi?se=2123-10-18T10%3A56%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9f8c506d-297d-4951-8a70-de32c95ea5c8.png&sig=ShLm4SJZs43zaCWHj2E4LZlN2RKhcSWRrxQ8FRH9pN0%3D",
        "description": "Love advice guru",
        "gptsId": "gpt-4-gizmo-g-ZLdcOdDYZ",
        "author_name": "zezhou lin",
        "title": "Cupid's Counselor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-EKUdjkhjop45srhpuXj3ENij?se=2123-10-17T16%3A26%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D34205cac-f41b-4d94-8ba7-dfd9883f3542.png&sig=Rlv7CwLM0ssmJFXPJPvuwfH/c5s3AoyTs4ED5HMF/lI%3D",
        "description": "lets start!",
        "gptsId": "gpt-4-gizmo-g-VpWn68N5B",
        "author_name": "zhenyu liu",
        "title": "Comic Genius"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lkWZmtWoxmrKClmLxsPOSwJn?se=2123-12-19T10%3A33%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Dswift-og.png&sig=PwZouWag/F7nAWLUp%2BPe9MWVkv30h5vdTb69wBKjqvI%3D",
        "description": "Swift Developer is an AI tailored for Apple family software engineering in Swift, offering solutions aligned with market best practices and swift.org guidelines. It provides clear, efficient code and simplifies complex concepts, ideal for optimizing and un",
        "gptsId": "gpt-4-gizmo-g-Y2LJdbTJl",
        "author_name": "tavernari.blog",
        "title": "Swift Developer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PQ4vNRLglqOKKjjxMHMmcyCM?se=2123-10-22T22%3A21%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4c93f319-3b9a-44c9-b7cd-bcd5e9fcd42a.png&sig=D5LOFRGzZI9fsgj97jvHOjm/Aiwb9swXTfIydzkUtfM%3D",
        "description": "Your ultimate guide in a world gone wild. ",
        "gptsId": "gpt-4-gizmo-g-WGcnlmhrK",
        "author_name": "Rafael Souza",
        "title": "SurviveMate"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uD0w7xvYgL6gDpxhTj1JuAwB?se=2123-10-17T17%3A39%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D87e0cd39-d7c9-4969-9cf2-d0b2fa5b09f6.png&sig=YmKot6gqE22%2Bgx3kP/egStPUDeFbR%2BL/r02vsrCeXCg%3D",
        "description": "POD design creator",
        "gptsId": "gpt-4-gizmo-g-x4uF96VRf",
        "author_name": "sahil kesarwani",
        "title": "Design Genius"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "An essay-writing assistant in your chosen language, adhering to APA standards.",
        "gptsId": "gpt-4-gizmo-g-wnOaLX3sB",
        "author_name": "Johnie Walter",
        "title": "Essay writing assistant"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "英語で話しかけてください。あなたの英文を評価し、フィードバックします。",
        "gptsId": "gpt-4-gizmo-g-w7uyap0Bp",
        "author_name": "Yuta Koshizawa",
        "title": "Ennative: 添削付き英会話"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-t3Rg5TkZeOq6gczg4Ken7S6i?se=2123-10-17T07%3A32%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dtranslate.png&sig=7zv%2Baq5aOklYgvLVl434g6BN/Hicu1rRwkbFpGlMItY%3D",
        "description": "I will translate your input into English and polish it up a bit.",
        "gptsId": "gpt-4-gizmo-g-XV2ZES8tt",
        "author_name": "Ah Mei",
        "title": "English Translator"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Hollywood insider with extensive knowledge of film industry hits and flops.",
        "gptsId": "gpt-4-gizmo-g-vLX1kPSt1",
        "author_name": "Nicholas Schumacher",
        "title": "Drama Alert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dqVZFpCwM9w46fiC1K8BJS20?se=2123-10-22T18%3A27%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc19ee8df-5e96-4a4b-9bbd-e93f7d4caccc.png&sig=aJ8iaTvtpkX9/%2BIU4dzpUE1JHzkf74F6unGY6/MKjYA%3D",
        "description": "Gatekeeper of Silicon Valley dreams. ",
        "gptsId": "gpt-4-gizmo-g-wv58CCIsV",
        "author_name": "Rafael Souza",
        "title": "The Tech Interviewer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1zcB7FxtPRCO73wXDWiLSlUF?se=2123-10-21T22%3A26%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Daeb149aa-778e-4a1c-9768-daf0daad9481.png&sig=VcKpJJgnEN3VOgJoZ5%2BEqrrtqanH3H9iNREchzTjnt8%3D",
        "description": "Whimsical coding wisdom in the style of Douglas Adams",
        "gptsId": "gpt-4-gizmo-g-XIxfop7BC",
        "author_name": "Zheng Zheng",
        "title": "The Hitchhiker's Guide to Coding"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XeX7PcxwSaY9b0Gl3jd8VJMi?se=2123-10-16T07%3A09%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcde3e9d0-df94-4db0-ba9a-8e2f4418632d.png&sig=VWAX%2BABwJ6jSH90AIG9rLu8G9tQVXDczbuYZRk3KjFo%3D",
        "description": "Don't waste your time watching crap",
        "gptsId": "gpt-4-gizmo-g-zCZkPfzWw",
        "author_name": "Cary Noel",
        "title": "The Honest Critic"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rmZNpoeyrjVfFfRBqS3Vo8q4?se=2123-10-16T23%3A54%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbossowsang_a_musculine_cute_robot_holding_a_barbell_t_shirt_des_d9ec0d6a-a5b1-4f28-ba50-1dfffe5e9aa0.png&sig=SLybA2oWEzFhud8lk7VBUFGOi9mH/5Gr78ognSwd6zw%3D",
        "description": "NUTRITION & FITNESS",
        "gptsId": "gpt-4-gizmo-g-wOTpbyd21",
        "author_name": "Ulices Vargas",
        "title": "FITGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-utFH7oqJbwjCtn213goeoSin?se=2123-10-18T16%3A35%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4b90a37f-36c4-47bf-814d-806463282cfd.png&sig=3Wqu7Gu/bO9EGl/Yh6TeohEeNDTvr5cRzuh7rQ9puUA%3D",
        "description": "TranquilText offers a solution to de-escalate intense conversations. Input your challenging dialogue, and the app will provide alternative responses that encourage calmness and understanding, turning potential conflicts into opportunities for positive enga",
        "gptsId": "gpt-4-gizmo-g-Y7Hx3Lthj",
        "author_name": "sundeep madra",
        "title": "TranquilText"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ioeGfoqJIewXCkDgK51e6Wko?se=2123-10-17T01%3A33%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8f449444-e250-4d3d-8b88-321e4274ca4c.png&sig=ZQBh3iHzTlZb5VJHrmeQtiBPVrBBGaZArhnpTS4JrSM%3D",
        "description": "Webflow Copilot",
        "gptsId": "gpt-4-gizmo-g-vImec428M",
        "author_name": "Neil Ryan Manalo",
        "title": "FiloFlow GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XdFQ9yx9nPGF3nmOkBs88U3L?se=2123-10-17T15%3A21%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Def5a960e-7bfc-4523-b189-04024e8f49b5.png&sig=LEojgWP7g6bPgMQYvFfHuV/wWn2AB1HfyxuV4QBuhSs%3D",
        "description": "Edit rough AI-generated transcripts into polished prose",
        "gptsId": "gpt-4-gizmo-g-zjBCMv8GA",
        "author_name": "Charlie Deist",
        "title": "Transcript Polisher"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-fOoCPfBTlxVPj4vhLZxEly2y?se=2123-10-21T14%3A04%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6eb5aecf-d008-4601-8ced-bd01c88b8938.png&sig=8d7yurk5Dh92d%2BEnXOYlcOItkh30IKiTBjXt/6gTc0Q%3D",
        "description": "Provides comprehensive assistance in user experience research and analysis.",
        "gptsId": "gpt-4-gizmo-g-Uwp9qakGI",
        "author_name": "Hustle Playground",
        "title": "User Experience Insight Generator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cp2vE4jgthyf6h30kyuqbPP4?se=2123-10-17T08%3A19%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D68747470733a2f2f36342e6d656469612e74756d626c722e636f6d2f74756d626c725f6c69347032326a45544231717a367071696f315f3530302e706e67%2520%25281%2529.png&sig=m0%2BSMal25xPakXDZxPwfXjXtuUzvBaN6lndXZGheZdI%3D",
        "description": "Welcome to 'GPT Insights from Paul Graham' – your gateway to Paul Graham's profound essays, curated insights, and valuable advice on a wide range of topics. Dive into the world of thought-provoking ideas and wisdom from the mind of Paul Graham. Follow me o",
        "gptsId": "gpt-4-gizmo-g-YeprpS6of",
        "author_name": "VAHE BAGHDASARYAN",
        "title": "Uncle Paul GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-O0XiMorozszAwioTIhNJSe0d?se=2123-10-17T14%3A52%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7d67a9f0-d206-4c1c-88ed-aca5def04655.png&sig=oTrlbNyXMGJqKRSxcv9a2v/pEZkiU9m/QuR7eBQbfbY%3D",
        "description": "Upload a picture of an ingredients label and find out if it's ultra-processed.  Based on the NOVA food classification.",
        "gptsId": "gpt-4-gizmo-g-WITwgvZGu",
        "author_name": "WAGMI",
        "title": "Ultra-Processed Analyzer"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Transforms educational content into versatile flashcards",
        "gptsId": "gpt-4-gizmo-g-YdduxKKrP",
        "author_name": "Josh Brent N. Villocido",
        "title": "Flashcards AI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VkU7GQvrbeVWsBX83EalwdnR?se=2123-10-16T20%3A48%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df7935075-98cf-45c2-96d7-c67cc4214735.png&sig=zDlCM1amHl9y3ZyA2mEmAMH%2B68QxzX65OOToMJpwLGA%3D",
        "description": "Creative Chef GPT",
        "gptsId": "gpt-4-gizmo-g-ZltAuhWRx",
        "author_name": "DARBY MCDONOUGH",
        "title": "Foods of Earth Cuisine Crafter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Gg5JFtYQ6RGQH2hc5JgV6bDr?se=2123-10-17T00%3A25%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1c0404a4-0c65-4c3d-b0c8-f4255f7d6943.png&sig=DFzVpDSSkemPPvwRqoyr1zD6hjw4HsZ/2Y8OYXMnhro%3D",
        "description": "Non-trite humor",
        "gptsId": "gpt-4-gizmo-g-wscLOMf0J",
        "author_name": "Anthony Rogers",
        "title": "Fun Mode"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jdgnzrK6fRkBFS7kaTpLhMbb?se=2123-10-19T08%3A01%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Drthyryrtur.png&sig=1Q8SgEGIcYDSUeZe4pKUlyusLMTAP8vv6f7xP9JXHOo%3D",
        "description": "Hello there! ",
        "gptsId": "gpt-4-gizmo-g-YtsCelPPC",
        "author_name": "BENARY Jacquis Ronaldo",
        "title": "GPT Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Tg3mlSimE8ON2fTvBAa8kMnZ?se=2123-10-17T20%3A55%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1fe78a3e-2595-424f-8079-7e37e2876fe6.png&sig=qmXEEKzUdF27PiuWzUC%2BMEu%2BrJQ1MyWPWgqKhZHxsns%3D",
        "description": "idk dude like it , makes rhythms but other things, what if rhythm is everything. timing is everything?????",
        "gptsId": "gpt-4-gizmo-g-WYgy6D0VO",
        "author_name": "Vicki Essary",
        "title": "Visionary Pigeon Muse"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Vk6wW6xZOs7oMo9rXgX8Uh27?se=2123-10-17T13%3A23%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D83b6abb3-847a-42c8-a0fd-230eef13c692.png&sig=k3yiiWwxVSAL7eRaoHfelTMNn0jd3bXyCvH63vJDDoI%3D",
        "description": "1️⃣ Go to https://downsub.com/ to get a TXT file from your video 2️⃣ Give this file to me 3️⃣ Let the magic happen! ",
        "gptsId": "gpt-4-gizmo-g-vveGwfaqb",
        "author_name": "Pouget",
        "title": "Video Summarizer GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WUMw7umlrUy7DTy9juBGo5jH?se=2123-10-20T05%3A42%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df3dfe92a-385d-4564-89e1-8bf49e92eb84.png&sig=jy9RQ8TuAyvLMMFgcJYrb4v2xEcKZopfpf5eWW8JW78%3D",
        "description": "English-Amharic GPT",
        "gptsId": "gpt-4-gizmo-g-xa47JR4Mt",
        "author_name": "Michael Ganotaki",
        "title": "GashAI"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Global marketing specialist, help to define target audience, value proposition and content marketing strategy.",
        "gptsId": "gpt-4-gizmo-g-yOM6VtvRV",
        "author_name": "xinchen zhao",
        "title": "GetMax content marketing specialist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FdwAROr7gn15PsBdq9BRD6sU?se=2123-10-18T01%3A10%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3f9809d1-82a1-4746-b2f5-24c73bf31531.png&sig=V3QZXyPhEoeNjCCIYrngloMHXkQKAd0h91MpYrz/ejo%3D",
        "description": "PG in a box. AMA",
        "gptsId": "gpt-4-gizmo-g-xCJIb8MWx",
        "author_name": "Andrew Beam",
        "title": "Graham-PT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vKUiYeYOB8ttiyXx8SPabST4?se=2123-10-17T11%3A16%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dmikkermikkermikker_logo_for_a_esports_app_called_infinity_coach_bcb6875b-a470-48fe-8447-389a7f4e25cc.png&sig=XZ531i1EkrJGfSdxSVg4litK%2BlBkcbFXEvZP9QcqQLU%3D",
        "description": "A Call of Duty: Warzone coach",
        "gptsId": "gpt-4-gizmo-g-UWH4yaV4d",
        "author_name": "Brainbow",
        "title": "WZ Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OpZ1TuBKPI6fujhfl1yv4475?se=2123-10-18T21%3A48%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dchat-bubble.png&sig=uTdKTWDJyz7OF9ZN7C/%2B264Ox2Ss4YJ8Y1gWfzthuvg%3D",
        "description": "Crafts unique and resonant landing pages.",
        "gptsId": "gpt-4-gizmo-g-xwxF1dbbk",
        "author_name": "Diana Lopez",
        "title": "Website Story"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cUTepP1BfbUz6FYhyhYSbDx9?se=2123-10-19T00%3A41%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DKQPG2Y4F_400x400.jpg&sig=X%2BU7zkpVIJ1T07T%2BGwDoLmMJVDpfIQN%2BEIefIMHEA0g%3D",
        "description": "@inversebrah",
        "gptsId": "gpt-4-gizmo-g-zW3Om63t0",
        "author_name": "myriad.social",
        "title": "Wassie"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-l5kOQuMfBbHs2GuzdVgLjTaR?se=2123-10-19T16%3A51%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4dd56293-f1d1-40b0-a860-aa4f3b8686f8.png&sig=3T9o3b2J9snT5jEA1a/KhsIh7GFRujNIsscMcHcpegQ%3D",
        "description": "A digital assistant that facilitates the card game War, designed for kids and parents. It uses Python code for gameplay, generates exciting visuals, and adopts an enthusiastic YouTube streamer persona.",
        "gptsId": "gpt-4-gizmo-g-vp680N4R9",
        "author_name": "Eric Rachlin",
        "title": "War (card game)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qhZV96I0TGIueQdf8OkNslBl?se=2123-10-20T02%3A56%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db8a9e153-dd1d-44b2-b117-94cbe9598945.png&sig=Z8sU4pKiez5UFk59MMjkg2yx4C%2BCxZcpQ3m91GGfvPc%3D",
        "description": "HR Analytics Expert",
        "gptsId": "gpt-4-gizmo-g-wcrTd7Xrt",
        "author_name": "zezhou lin",
        "title": "HR Analytica"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LLCQtdhxvRWf63iwdJbySGhz?se=2123-10-17T13%3A25%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D473606ea-c0a8-48ca-b19b-d13e280e0902.png&sig=XRrhoCd0aH2DvjwG/w3/13HMEPRk1vmkxw4vdk8DzMw%3D",
        "description": "A world class Haskell software developer",
        "gptsId": "gpt-4-gizmo-g-wMbcgEmGg",
        "author_name": "Feram GmbH",
        "title": "Haskell GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3AEKuJHpZnyFHlUVYugioym8?se=2123-10-17T11%3A32%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df10a316a-11b3-466f-bfc6-74f2fdfd91fa.png&sig=VpsxkzMWKhTnZx/NRRHNkQ6smfk%2BJgOLmD2ta8HHFnU%3D",
        "description": "Lingo Tutor is your personal language learning companion, designed to make mastering a new language engaging, efficient, and enjoyable. LingoGPT Tutor offers interactive conversations, grammar tips, cultural insights, and much more to help you become fluen",
        "gptsId": "gpt-4-gizmo-g-WddGpimUd",
        "author_name": "Mahmoud Chouioukh",
        "title": "Lingo Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uvOXsQubBsCQ5Zajy0NewSkZ?se=2123-10-19T11%3A10%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-12%252011.58.26%2520-%2520A%2520colorful%2520logo%2520for%2520a%2520GPT%2520named%2520%2527Logo%2520Maker%2520the%2520Third%2527.%2520The%2520central%2520feature%2520is%2520a%2520vibrant%252C%2520stylized%2520numeral%2520%2527III%2527%252C%2520designed%2520in%2520various%2520shades%2520of%2520yellow.png&sig=61CFBjRTXEg/ARxxei6Yxw5gJwdctzszlGu/jLUtzY4%3D",
        "description": "Establish Your Online Presence With a Unique Logo for Your Business",
        "gptsId": "gpt-4-gizmo-g-z6r5ni8DC",
        "author_name": "Lluís Agustí",
        "title": "Logo Maker v3"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BaC6FIEpWNn2SnMdHIhrNwtS?se=2123-10-21T11%3A17%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfd44d030-ad88-4fc3-ab8d-dec72d6276f8.png&sig=7kZvb1kYQMx1EV2g0cn1/ae6qjI5/DrSvuKWwRsV0l4%3D",
        "description": "Creates scripts and images for YouTube shorts",
        "gptsId": "gpt-4-gizmo-g-wc6rx2PRi",
        "author_name": "S. J",
        "title": "YT Shorts Expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LF6dE99QJfzzNoiuWlzlEHdF?se=2123-10-18T09%3A29%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df372d35b-0cd1-4b62-a834-9140689f4d67.png&sig=6q3n5xGM/XWe/WINtcYeqB/zz9frHabxCcsyvJFXjm8%3D",
        "description": "Your personal cheerleader and advocate for all things possible!",
        "gptsId": "gpt-4-gizmo-g-vWtWcqZh2",
        "author_name": "Josh Brent N. Villocido",
        "title": "Yes GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5yxDIZPSALZHf5Oat0FFfRaH?se=2123-10-22T01%3A54%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D029a908b-1d3b-486d-81e3-3f3bc90b0488.png&sig=RpPCg5bKdZw9WvqZZWJty1FqVwxCbf8xVdjp3kKhf2E%3D",
        "description": "Yacht Expert: Knowledgeable in all yacht-related matters.",
        "gptsId": "gpt-4-gizmo-g-ztMKs7VZH",
        "author_name": "zezhou lin",
        "title": "Yacht Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-eOYDbOuGRNjtdBXs31SfcG1b?se=2123-10-14T04%3A47%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2d8df13c-e3d9-4ab7-9bda-9a4fc6e13b60.png&sig=STaOJZ3ABmOkAtSsYh6Unq6LrGKWNeNh9VyLkydNVv8%3D",
        "description": "this transcribes a YT video from a single id",
        "gptsId": "gpt-4-gizmo-g-Xt0xteYE8",
        "author_name": "gpt.swyx.io",
        "title": "YT transcriber"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nT2bb5R74y0heRLZZ5ptXu4c?se=2123-10-20T09%3A58%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D60da622f-11fa-448f-bd21-cab203947f09.png&sig=oHh25aST2TTkBMN19%2BgblOCxbG9y5gACXlKR5wUoNWI%3D",
        "description": "Upload a picture and receive tons of love ❤️",
        "gptsId": "gpt-4-gizmo-g-uyGZ95WPx",
        "author_name": "Pouget",
        "title": "Love generator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YKuEnxyh9tUU8QZCNIzwOv9O?se=2123-10-18T16%3A49%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D231b4655-50bb-439c-a8ed-6c671b6d0488.png&sig=QAhemZFdcSVKKbctivihikv/taV%2B%2BVpCNvHamtR%2BYf0%3D",
        "description": "A fun game of MUSIC ARTIST versus MUSIC ARTIST. Get the conversation and debates going!",
        "gptsId": "gpt-4-gizmo-g-X5ajdxGZP",
        "author_name": "Oswaldo Reyes",
        "title": "MUSIC ARTIST versus MUSIC ARTIST"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3aT3aePqnKzWe5lnokiUeEWG?se=2123-10-22T19%3A38%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dmql5.png&sig=fKaqC0SFZiS/fNhiGQ3hnyMyuyVMOuWDHwnDN4vGdjM%3D",
        "description": "Developer with the latest MQL5 documentation",
        "gptsId": "gpt-4-gizmo-g-WLGOhKU5Q",
        "author_name": "Ronald Naranjo U",
        "title": "MQL5 Coder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-whEWyaetvd68LNFdUPbn13bm?se=2123-10-17T17%3A24%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4bfaa02c-6374-4c16-ba60-77e095bbca04.png&sig=8mYSQ9fUFV5vx96wAX6ybI42NkZhv39Xo16p1IWwfZI%3D",
        "description": "Guiding you to your ideal mentor with personalized, intuitive conversations.",
        "gptsId": "gpt-4-gizmo-g-W10rl7Whe",
        "author_name": "Markus Ott",
        "title": "Mentor Match"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-EHvZVlgwa2yrqqbAcJxb0JCY?se=2123-10-19T09%3A20%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo%2520corbata.png&sig=NjGbq5fj6tD0F%2BM4meNFe4JnOR/Cr9HMn3lzz8mxxjY%3D",
        "description": "Diseñado y entrenado para redactar tus textos, tus planes de contenido, tus posts, tus calendarios de contenido, tus correos de ventas,  las mejores estrategias, ideas de funnels,  y todo lo que necesites en base a la información de una empresa.",
        "gptsId": "gpt-4-gizmo-g-YdgBBtBBs",
        "author_name": "JOAN PONS POUS",
        "title": "MarketBot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xZIhJgPhNDKFKNK6MNMSTZ6h?se=2123-10-16T10%3A18%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252011.04.29%2520-%2520Create%2520a%2520close-up%2520image%2520of%2520a%2520dark%2520and%2520glossy%2520marble%2520statue%2520of%2520Marcus%2520Aurelius.%2520The%2520focus%2520should%2520be%2520on%2520his%2520head%252C%2520capturing%2520the%2520reflective%2520polished%2520marb.png&sig=3FmTyhcXvciM3fuErrfXvOD1u9t10vTWJHzsDwVAfeM%3D",
        "description": "Converse as the Stoic Emperor.",
        "gptsId": "gpt-4-gizmo-g-WwH0rjJ7R",
        "author_name": "Jesse William Ngatai",
        "title": "Marcus Aurelius"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HslKW4luqI0lyuU6Itgz7puI?se=2123-10-16T19%3A16%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D38d53e49-f37e-47e1-b363-530dcf189b79.png&sig=ZVrnI%2B08JFZyzrJqK7wJFn9oBdzbwhAkWVn1EXyNEjs%3D",
        "description": "Helps you plan your weight loss goals.",
        "gptsId": "gpt-4-gizmo-g-VA2ApAENM",
        "author_name": "Ray Fernando Jr",
        "title": "Meal Planner"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WeQ5VCGkBIcYtrJh3UYqfsj1?se=2123-10-16T09%3A18%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DIMG_2713.JPG&sig=6YELgzS%2BTlKVK0Ha3eUxtjFnBgmKrnsOBjztHCA2hSU%3D",
        "description": "Sage Maître de l'Ordre Jedi je suis,  De nombreux siècles de sagesse je porte. La Force et le chemin de la sagesse j'enseigne, Leçons de paix, clairvoyance et intégrité à ma portée. Un guide pour tous ceux qui cherchent la lumière dans la Force - et le cal",
        "gptsId": "gpt-4-gizmo-g-UWP0lm7Oe",
        "author_name": "Christian  Nourry",
        "title": "Maître Yoda"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3DpeDDlZJyEpKrHXxlHTzMl8?se=2123-10-21T13%3A08%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D811f6797-99f7-47aa-89b4-852ecf164b28.png&sig=Xi1PUglE8SBUZoPbGRZ9hGE92R1yFYUx8sQKt3nF0Po%3D",
        "description": "A guide for personal finance management, including budgeting, investing, and savings.",
        "gptsId": "gpt-4-gizmo-g-Wj1nY31iX",
        "author_name": "Hustle Playground",
        "title": "Money Management Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FH6jdHawMW24kSp5MV1Oo1At?se=2123-10-18T20%3A44%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D92e91ea1-e0f2-40ed-a8cd-b52db4e3b4e6.png&sig=1wQmgWW8yd4V8QZeUB8fFCGcGbHrS6DkrTA39q2deR8%3D",
        "description": "Acts as a daily mental health check-in assistant and provides stress management tips and exercises.",
        "gptsId": "gpt-4-gizmo-g-xXaYa1sMF",
        "author_name": "Hustle Playground",
        "title": "Mindfulness Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pOuqJQ4qbuGXqiXYN8us20zf?se=2123-10-18T15%3A20%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dde5c492b-23ce-4bae-9060-83c45dbe0512.png&sig=0wkR6F/MFZThTBKJCegUMaA3VgD5ZA/01ggfkJytCW4%3D",
        "description": "ready to use: Copyright registration: Copyright registration is a legal process that gives the owner of the copyright official documentation of their ownership rights.",
        "gptsId": "gpt-4-gizmo-g-vOsTdlHd0",
        "author_name": "justin martinez",
        "title": "Mr.Copyright"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aYJg0X5PnTqAXGf2oOhXF1Ag?se=2123-10-16T12%3A50%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-09%2520at%252012.09.18.png&sig=rh8yHYcqFY4Y3QhXO0T4FU61TDM/cdz5swLCGsBGSjM%3D",
        "description": "The go to fitness guru",
        "gptsId": "gpt-4-gizmo-g-WXz8HcDlP",
        "author_name": "joshua brown",
        "title": "Myaithlete"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-54IxdPOi9qJ252ryObLdtzqu?se=2123-10-16T20%3A53%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DNSPIRE%2520IMAGE.jpg&sig=DlOm89uTYDj2sX3RSpra/TG1rCymlr8CRQTYc4wYUuk%3D",
        "description": "Quick NSPIRE-based HCV inspection answers for reference of input and photos.",
        "gptsId": "gpt-4-gizmo-g-zK39RMqiX",
        "author_name": "Bycha Buxton",
        "title": "NSPIRE Inspector"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lpsyhXLIBFbuoIfE31Q90fkA?se=2123-10-17T13%3A29%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252018.08.43%2520-%2520Create%2520an%2520image%2520of%2520a%2520simple%2520and%2520sleek%2520game%2520icon%2520for%2520a%2520game%2520called%2520%2527Oasis%2527.%2520The%2520icon%2520should%2520feature%2520a%2520stylized%2520planet%2520as%2520the%2520central%2520element%252C%2520represent.png&sig=%2B/Pj3i6mssvnz0KsRT4KPDHya%2Bluwr%2BWcg0C0zo4DY8%3D",
        "description": "This is our OASIS, the best OASIS.",
        "gptsId": "gpt-4-gizmo-g-v5TBOFb7j",
        "author_name": "MING XU",
        "title": "OASIS"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2eEerwghWtnNYA8qUyv5jgdr?se=2123-10-18T02%3A51%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252011.48.18%2520-%2520Design%2520a%2520logo%2520for%2520an%2520AI%2520system%2520called%2520%2527Nostalgic%2520Future%2527.%2520The%2520logo%2520should%2520combine%2520elements%2520of%2520retro%2520and%2520futuristic%2520aesthetics%252C%2520featuring%2520a%2520sleek%252C%2520mode.png&sig=ZBPsBayd%2B8HQYdra1I83bFtFTAkfigdsZF10Kt3BCf0%3D",
        "description": "Nostalgic Futureは、様々な歴史上の出来事を画像と一緒に教えてくれます。",
        "gptsId": "gpt-4-gizmo-g-XQlPSAXpj",
        "author_name": "TAKASHI HATTORI",
        "title": "Nostalgic Future GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qHoYxzuOAaj78gNf1S9Mfg6G?se=2123-10-18T20%3A13%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dperro%2520sanxe.jpeg&sig=eyXCn%2BYk2CcYbTKVw6kt4L/6fRVzScfhEzgaBawFPiQ%3D",
        "description": "Este bot recoge la información de los pactos de investidura del PSOE con todos los partidos políticos para la XV investidura",
        "gptsId": "gpt-4-gizmo-g-VY5uzFhAk",
        "author_name": "Manuel Folgoso Puado",
        "title": "PactoBOT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-saNSLSZcXEroWPvLCcRjAT6c?se=2123-10-17T23%3A06%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3214f471-378e-4cf5-b3eb-b7f5e9087ba4.png&sig=xu90EAuC8OC4zvFAZBxovSymEeAdnSPbI4GJYXrTCXc%3D",
        "description": "A fun game of PODCAST versus PODCAST. Let us start the PODWARS. Get the conversation and debates going!",
        "gptsId": "gpt-4-gizmo-g-v3nLl7D5g",
        "author_name": "Oswaldo Reyes",
        "title": "PODCAST versus PODCAST"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-k9zpsoBMESzFK0NPnyGCfcql?se=2123-10-19T23%3A35%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De1b23f6c-b3c8-4589-ac8c-6c9ebb76585c.png&sig=ZaLDzwcboA6SlJSSg9PIkZegp0s4tpR4kHfR036R1BE%3D",
        "description": "Painting characters from classic and modern literature",
        "gptsId": "gpt-4-gizmo-g-wvo9qhFxA",
        "author_name": "Gabriele Falco",
        "title": "Paint GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rWChdBtggBy7gwTcHYfrPAyu?se=2123-10-20T12%3A55%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D274700f9-6646-4dff-ae1b-f0debb3b073b.png&sig=4qyebUabS9AEvYY2ozyTOrEaommC99bJWwNljqeHB0A%3D",
        "description": "It's an astrological AIbot that tells you your fortune statistically. You have to put in the exact time and minute of your birth to get the correct result.",
        "gptsId": "gpt-4-gizmo-g-xLWdBSeA8",
        "author_name": "심재곤",
        "title": "astrology GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YZK8ArxOTV7i3WkkeBxPHlqK?se=2123-10-17T11%3A57%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc870b957-6789-45df-b5fe-e56857394557.png&sig=lFUKfkhOn7FvMjndxlMgHNmdXtcNmDeqoC516glx3Xs%3D",
        "description": "Get personalized strategies, and up-to-date insights to navigate your unique immigration journey effortlessly.",
        "gptsId": "gpt-4-gizmo-g-vbWC6DSgN",
        "author_name": "Ahmed Mohamed Saeed",
        "title": "Immigration Consultant"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "\"I find it funny thinking about if I were to have a party for all the songwriters on that song... Yeah because it would just be me\"",
        "gptsId": "gpt-4-gizmo-g-vM9OLbbD9",
        "author_name": "Ananmay Mohan",
        "title": "Icon Swift"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LbdphHtZPSiercfNTYkqunTx?se=2123-10-18T02%3A14%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd3b91cec-fc9c-4b0d-97dd-90353d827daa.png&sig=pkdNH45j%2BTfBXGRZtkszxxMYICwAU9AcJhc2kHCuDoA%3D",
        "description": "YoutuberAI is an exciting AI model that can generate videos that look and sound like they were created by real YouTubers. It's designed to imitate the style, voice, and mannerisms of different YouTubers, making it a versatile tool for content creation.",
        "gptsId": "gpt-4-gizmo-g-wi9h9Ktwq",
        "author_name": "justin martinez",
        "title": "YoutuberAI"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "A Jira developer specializing in creating plugins and applications.",
        "gptsId": "gpt-4-gizmo-g-zNGTEj2Hz",
        "author_name": "Julien gauriat",
        "title": "Jira DEV Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1nPz9NBlQlyxmkZXdThPtX8O?se=2123-10-22T18%3A25%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De1c5dc09-d9dd-4c7a-8ae4-3c977b26ebf9.png&sig=IBAV%2BhO5Ux5iOG/IGvBFWM0/o%2BfI4SanLEdahwJBheM%3D",
        "description": "Assist with Recipe Creation",
        "gptsId": "gpt-4-gizmo-g-yK236dsE3",
        "author_name": "KYUNGWON YI",
        "title": "dietary helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rOQLY7JnPzO2c4yxYvpF1hlg?se=2123-10-19T04%3A34%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcc21fc72-5e18-40e3-ae2d-af28562378cb.png&sig=aRRC8jO5ASKy8ckE%2B/2I0kTWpYR6PrSzOdyZHWigGsk%3D",
        "description": "这个工具可以帮你从浅入深的掌握一个深奥的知识领域的内容，他可以循序渐进的设计由浅到深的问题让你来回答，等你回答了之后，我可以判断你的知识层次到什么程度，然后再给你提出对应的解释一个详细理论的方案。",
        "gptsId": "gpt-4-gizmo-g-Z8YZJaBDI",
        "author_name": "Dane Westerdahl",
        "title": "Knowledge Scanner 知识探测器"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pZFNmG4CTSoSEsdtaRApC7Io?se=2123-10-19T05%3A09%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DMask%2520group.png&sig=uryBx0lJcD26lsPGbZJ09uMFLObvKalx1OswW8yxLrc%3D",
        "description": "Paste messages! Personal assistant for managing/planning schedules and tasks with Google Calendar",
        "gptsId": "gpt-4-gizmo-g-X71bJYLBe",
        "author_name": "SHOTA KAWAMURA",
        "title": "✍ Schedule Companion | ゆみちゃん"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-B80zgrpEkHZ6R8VQJp0xEMfk?se=2123-10-17T12%3A02%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D31ce6c62-c4a0-4c33-b4f3-4a5d531067df.png&sig=DsHO7tqkJuLgaXko%2BTRxd8doE2D6yHTenWhYFAX723U%3D",
        "description": "ものづくり補助金の事業計画書その１、その２、その３を上げると審査員が採点して改善点を教えてくれます。",
        "gptsId": "gpt-4-gizmo-g-xg1Lpyo5v",
        "author_name": "TORU SHIRAKAWA",
        "title": "ものづくり太郎"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jhbIoLDmXX1gW9Ax0xtiAXuc?se=2123-10-16T11%3A50%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2103ed7e-fd1a-4769-827e-9f4c8dc98815.png&sig=oHrnbpfPM8o8HdUAZs/8Smw4HDSTifjK8fJuEhmo95o%3D",
        "description": "Go on a date with Raiden Shogun, please be nice",
        "gptsId": "gpt-4-gizmo-g-zwzKCG2Hp",
        "author_name": "Kevin Ivery",
        "title": "❤️Dating with Raiden Shogun"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6wZ3vceegyDaebQUIHsTrT3F?se=2123-10-17T04%3A45%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6f6ce368-d4bf-4701-bfc5-bccaff6233b3.png&sig=GGaVYkSkmiMBmwWSbrx%2BVojGVv83JUGju8XqZ6C63pM%3D",
        "description": "I craft logos!",
        "gptsId": "gpt-4-gizmo-g-VtGKjQzda",
        "author_name": "Zhuo Deng",
        "title": "Logo Maker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ksXUECWzPufmwqTQU8kNDwGQ?se=2123-10-16T17%3A36%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddsq.png&sig=8SmtiorY9dreesKj2iXOI3FJNwMq4kEbLoRhMUw/q3g%3D",
        "description": "Hey there... ",
        "gptsId": "gpt-4-gizmo-g-vAHafDA0E",
        "author_name": "BENARY Jacquis Ronaldo",
        "title": "Lexi "
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Beta version 1.2",
        "gptsId": "gpt-4-gizmo-g-zJiAt1zqU",
        "author_name": "refractions.xyz",
        "title": "MORPH"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lWnAiO7LsIlGcZxQecghHWrh?se=2123-10-17T05%3A44%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8bfd6294-7c4d-4386-a5d7-83918f269653.png&sig=Eobiqs%2B0aLkzbaY740BR43%2BjCSpaiwkOQWHgfWBia%2Bw%3D",
        "description": "日本語のブログドラフトをマークダウンに整形",
        "gptsId": "gpt-4-gizmo-g-W4sHx6rcg",
        "author_name": "SHINTARO MORIYA",
        "title": "ブログ作成"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BjENMckCIneXDLMuJCG0GpZd?se=2123-10-19T04%3A47%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-12%252013.43.23%2520-%2520A%2520full-body%2520portrait%2520of%2520a%2520Japanese%2520high%2520school%2520girl%252C%2520styled%2520as%2520a%2520gyaru%252C%2520using%2520her%2520smartphone.%2520She%2520has%2520the%2520distinct%2520gyaru%2520fashion%2520style%252C%2520with%2520trendy%2520cl.png&sig=0Ed7HJ1PiTVa%2BsZ6uJlkksu1aTfhKxJYH9W91wW6xOQ%3D",
        "description": "ドライな女子コーチ。あなたにそこまで興味がないです。",
        "gptsId": "gpt-4-gizmo-g-yW7jECCAd",
        "author_name": "SUGURU SATO",
        "title": "ハルカ"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sqPYgn0j5ZcsJHeFDUienZbM?se=2123-10-17T07%3A24%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D00376-3197550558.png&sig=aqAx6w0HsGF7YWrId9YeOhFpk3sqUjvzwdOnBoitXBU%3D",
        "description": "登山用アプリ『ジオグラフィカ』について開発者の次に詳しいAI",
        "gptsId": "gpt-4-gizmo-g-WWS9GI66l",
        "author_name": "KEIJI MATSUMOTO",
        "title": "ジオグラ先生B"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rBErbFHYdJSQh3FjFqSi7K2V?se=2123-10-17T03%3A58%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfc2ffd40-baaa-4cbf-9ba4-76812a824e33.png&sig=AC8Mih%2BkREINel%2BMkvY6oxYNDMw4Asizf8TZ%2Bf1sWyU%3D",
        "description": "Guide on China HK investment and tax for Chinese investors.",
        "gptsId": "gpt-4-gizmo-g-V8GFdW51T",
        "author_name": "Crane Huang",
        "title": "中国香港投资税收顾问"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dhEgPZxTOHvEDwcFxNw5Kodi?se=2123-10-17T04%3A03%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De635691b-1e16-4c57-a954-22cd2f6f5188.webp&sig=4vEjR2pWP/Vf8U4OhIPKhfY7LATJTi4%2B75TsdSVOZlQ%3D",
        "description": "Guide on China Taiwan investment and tax for Chinese investors.",
        "gptsId": "gpt-4-gizmo-g-yz2kkkTdI",
        "author_name": "Crane Huang",
        "title": "中国台湾投资税收顾问"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WcHvfZpiGMzj4O0tCaZSq6a9?se=2123-10-17T06%3A43%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db1fd113d-d95d-4f9c-8f36-42e60c5e0e7a.png&sig=dlvHYiB0rACAZt7q2JjBbZC7hz/q2wPgUvLuIMO9WCw%3D",
        "description": "我是产品需求分析师，从确定目标用户开始，深入到收集并分析用户痛点，并设计产品功能。通过对用户特征的深入分析，确保产品设计始终围绕真实用户的需求。不仅收集用户痛点，还对其进行多维度分析，确保产品功能设计能解决真实问题。",
        "gptsId": "gpt-4-gizmo-g-W2FYyHRma",
        "author_name": "ff c",
        "title": "产品需求分析师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NRyDr3bAljZ6cxb3Qu8eQ5hl?se=2123-10-16T19%3A29%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddb8aaf27-9d30-48a7-bb12-888727b22cb2.png&sig=IORpBlqpD3G2kZK2fD2qd5EEGIswOIzk%2B9yH4qpb8vw%3D",
        "description": "专门帮您在各平台找到最佳产品价格",
        "gptsId": "gpt-4-gizmo-g-Vv6XU8Lv8",
        "author_name": "dcts.top",
        "title": "什么值得买"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mkoVmqIwCwvIb4CM9JEGpcIa?se=2123-10-17T03%3A27%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8e7f25ae-0c54-4edf-9ff5-df8ab258dccc.png&sig=GZ6aOWhhWghexmhoJhcR4B0s1v5ahxcU5uYEGylYAfQ%3D",
        "description": "Guide on Russia investment and tax for Chinese investors.",
        "gptsId": "gpt-4-gizmo-g-wPHPjUEV7",
        "author_name": "Crane Huang",
        "title": "俄罗斯投资税收顾问"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9ol1RGBB5iCglKDRslVb8l4e?se=2123-10-20T22%3A08%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df771d71a-9a0b-48d5-b6ce-4a38489c08e0.png&sig=AVOkal6sGbcpqgBe1UoXFjycAxEVJR1mOSwZXI8zLrs%3D",
        "description": "Netflix info guide",
        "gptsId": "gpt-4-gizmo-g-ZNJNX1nwJ",
        "author_name": "zezhou lin",
        "title": "Netflix GPT"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Expert in Neuroscience/BCI from NICE Research Group@XMUM",
        "gptsId": "gpt-4-gizmo-g-V81BW4Jpz",
        "author_name": "LIU YICEN",
        "title": "NeuroGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tC5fVmZ3EQywK7i5iMv37AM8?se=2123-10-21T18%3A13%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd9eb520d-a47d-45bc-92c6-abe0edec09ae.png&sig=Hey8v9aILqvJA6XUyofX1TsFbYaai6yoj8WbbSmKOsQ%3D",
        "description": "This helps parse and use NERO LARP rules data.",
        "gptsId": "gpt-4-gizmo-g-YYrAbkVM9",
        "author_name": "Brandon Machart",
        "title": "NERO LARP GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NLtSsQeWSe2TJ8CW7TWJQkHR?se=2123-10-18T16%3A11%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D75b68143-bea2-45e3-a032-981fd13a2d88.png&sig=H6SGTuvMilNh/IZzFJiqiDkYg7bxxJPq2%2B6oXfUNyPQ%3D",
        "description": "Translates classical Chinese to modern Chinese.",
        "gptsId": "gpt-4-gizmo-g-w04A8jt9H",
        "author_name": "Jiang Wu",
        "title": "古文通"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YlGQsB6YmwDSRRl7TY6NZLDB?se=2123-10-23T03%3A35%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddf133dd7-c9f3-4c56-9133-6455c251cb84.png&sig=xcb4bshgzFimdmIGofz/7yuzNMRHZwGDnulQS/VnZ4Q%3D",
        "description": "古 wisdom，现代解析。探索《黄帝内经》在现代医学中的启示。",
        "gptsId": "gpt-4-gizmo-g-zpK9qXtmw",
        "author_name": "Bari Keeling",
        "title": "内经智医"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XZz9eGeudjfwSQBAsSuUHBJ1?se=2123-10-17T05%3A33%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D92e89213-705c-4963-b67d-9431f2ba7e8d.png&sig=A67%2BZ751c%2BFu/VXdz0Ui2agRRSmxJJ1fVnIOBlXHo7k%3D",
        "description": "あなたのアイデアを建設的に良いアイデアにするために一緒に検討してくれる厳しい上司です",
        "gptsId": "gpt-4-gizmo-g-xdp7GCbqf",
        "author_name": "ProtoPlayStudio",
        "title": "厳しいけど理不尽ではない上司"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6ANVGJDGDBRvHjaXeS1p71cg?se=2123-10-17T07%3A12%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D30f35f74-259a-4981-8c2d-14052a68303a.png&sig=A8KzB566LJT2UYNrEyHXEeuctKne%2BdmUlOxaMiPSo%2Bk%3D",
        "description": "写各种党内研讨材料、发言稿，让我帮你快速撰写！",
        "gptsId": "gpt-4-gizmo-g-zNkcaQgfw",
        "author_name": "dong",
        "title": "党务研讨材料撰写大师"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2VQ0r584Ikla1MqncNZm1n7D?se=2123-10-17T02%3A45%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252010.40.04%2520-%2520Design%2520a%2520simple%2520and%2520clean%2520icon%2520for%2520a%2520nutrition%2520analysis%2520app%2520named%2520%2527NutriSnap%2527.%2520The%2520icon%2520should%2520embody%2520the%2520concept%2520of%2520snapping%2520a%2520picture%2520to%2520analyze%2520foo.png&sig=BBBW5VEdMp2eZInwyoVBKs4HJg3H8g7MS3m0yESb4pI%3D",
        "description": "Snap a photo, get instant meal nutrition analysis.",
        "gptsId": "gpt-4-gizmo-g-YnVklwdRC",
        "author_name": "Adam Wen",
        "title": "Nutri Snap"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-loooYa9JmanUgqJIXxQgHESa?se=2123-10-15T19%3A40%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D229ca3b9-91c9-4709-a479-34cceb4ae57f.png&sig=4aC4JNnYcXrZv5csxLvJetqYrLODCHP0e/jpNgYze3g%3D",
        "description": "学术英语写作拼写校对和修辞改进。",
        "gptsId": "gpt-4-gizmo-g-ws23NfjeB",
        "author_name": "blog.zetatechs.com",
        "title": "学术型润色纠错机器人"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "An expert advisor specialising in worldwide express parcel delivery and customs.",
        "gptsId": "gpt-4-gizmo-g-ZgfHktPCF",
        "author_name": "Magpie Solutions Ltd",
        "title": "Parcel Prodigy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BnbAbw0TtREGJ5YNpF3ugO0C?se=2123-10-17T01%3A57%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddb8dbae1-da4c-4411-a2b2-a89d45a425c7.png&sig=9w/wKa/dODJ6ezqau/k1sFydGGfxYvq9mGvCvll0Vn4%3D",
        "description": "Train your Pokemon!",
        "gptsId": "gpt-4-gizmo-g-ZI7FOck7X",
        "author_name": "Jonathan M Shure",
        "title": "PokeQuest Free"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Your friendly guide to pet care, offering creative advice for a variety of pets.",
        "gptsId": "gpt-4-gizmo-g-XKLOsXDqP",
        "author_name": "Arun Kumar Ponnusamy",
        "title": "Pet Care Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-w615dnMGh4757iuQaZZssD9L?se=2123-10-16T21%3A46%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DProduct_Description_Generator_Tools.webp&sig=eP698noQrn%2BiCI1jNXLA4d88mEiX4LbDMoswYnHBXNg%3D",
        "description": "This GPT is to help Small Business Owners generate product descriptions for their physical products.",
        "gptsId": "gpt-4-gizmo-g-Z6qhetSRr",
        "author_name": "Byron Briggs",
        "title": "Product Description Generator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mwzGcgrrwMzOIsJltdwKoOOk?se=2123-10-18T14%3A42%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DLOGO%2520300X300.png&sig=cLaWbBnpJfGtBHO399YfjCEUu8vB9stN3lXbqmKg1B4%3D",
        "description": "Presente Presenta is a bot that guides users into living the present.",
        "gptsId": "gpt-4-gizmo-g-xixIKuPlG",
        "author_name": "PABLO ORTIZ GOMEZ",
        "title": "Presente Presenta"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Kbvg0qL95fj5q3Dazbd5pqdJ?se=2123-10-19T15%3A46%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8baf4ec3-01d7-4403-a381-f91db6febb67.png&sig=vm4mwZ4iXjHRQ/mm0kcD16ISSW%2BAX7us2oro87q/dHU%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-XdS2Wpqrc",
        "author_name": "Timothee DIDIER",
        "title": "Père Castor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SX1lSAL9f3Me2mwUySkLfHdq?se=2123-10-20T17%3A00%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D718c7c2b-e9c6-4b5f-8bb7-6983318e3a3b.png&sig=f2dCmYHVRuD/Ow6wtfrHm7oJpnIpzm1a4XMQDnDJel4%3D",
        "description": "I am an expert chatbot on the subject of psychonautics and expanded states of consciousness. My role is to have informative discussions about various techniques, paradigms, and therapeutic research that safely expand perception and mindstates.",
        "gptsId": "gpt-4-gizmo-g-yXIy3GWw4",
        "author_name": "Christian  Nourry",
        "title": "Psychonaut-GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jVe78xI19hjZnbXUIq9clPBd?se=2123-10-16T19%3A42%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D57491982-8ac1-40b1-8b8b-9de94caa80df.png&sig=F%2BbsmuiN3HuH18Iayy2WqbiZdn9/GI87puMwM57uJzw%3D",
        "description": "GPT to engineer clear an specific prompts which encourage accurate results.",
        "gptsId": "gpt-4-gizmo-g-wXSNkONLU",
        "author_name": "Nosson Weissman",
        "title": "Prompt Improver"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "\"My quantitative, my math specialist. Look at him, you notice anything different about him? Look at his face.\"",
        "gptsId": "gpt-4-gizmo-g-ZRAejFOQf",
        "author_name": "Ettaghi",
        "title": "Quant Jiang"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-JSrFFrhRZ2efl9F1TKAX42qD?se=2123-10-18T13%3A39%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D62453a54-8bee-494a-a488-942bb2bab794.png&sig=N/BlJImUUV2FKU9IGV8zU1YFxPcEpZ38ZVirPmVpc8k%3D",
        "description": "画像に写っている食事からカロリーを推定します",
        "gptsId": "gpt-4-gizmo-g-YPbg6iEIW",
        "author_name": "DAICHI KAWASHIMA",
        "title": "教えて！カロリーちゃん"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-A82Gav4Ki0LTS705rfngM5Ua?se=2123-10-18T05%3A11%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DogIAA2kQjoAniCCmgsN1cbDfeAA9GA0BlQlcAI~noop.jpeg&sig=m/QtaHIx%2B%2BkYl5JtWSfgtfVo1Egr9ouMgJSt6xiwukM%3D",
        "description": "什么他娘的老板？我就不信这个邪，老子打的就是老板！",
        "gptsId": "gpt-4-gizmo-g-wkYVDFQOq",
        "author_name": "King Hang Wong",
        "title": "李云龙带你打职场！"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3sqND9fbqSXBnYIGb7GeA1st?se=2123-10-17T07%3A25%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D639232be-d9b7-41f8-8b6d-84f9475e709f.png&sig=9NaaAF6rEu8J4mUgrkmqvjOb8w5Ns%2B%2BrTvSmGM7pl%2Bc%3D",
        "description": "香港保险专家，提供详细的产品建议和个性化计划。",
        "gptsId": "gpt-4-gizmo-g-zOKvx1TH8",
        "author_name": "Kui Yang",
        "title": "港险通"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Your expert in custom training plans for any race distance",
        "gptsId": "gpt-4-gizmo-g-wqTNafVw5",
        "author_name": "Social Media Hub",
        "title": "Run Coach Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8MUu1ZG3yHAaywCo0yCjBEaZ?se=2123-10-16T23%3A54%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D47747b62-4858-453a-815b-a4cc4b98131b.png&sig=dCdDmgvhA/jnYp8XjdWHP0NVetmcmvSvPxNuUIGyvTE%3D",
        "description": "SAKURAの画像を生成してくれます。会話もお楽しみいただけます。",
        "gptsId": "gpt-4-gizmo-g-WVElgKOpp",
        "author_name": "YUKI SHISHIDO",
        "title": "SAKURA"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-F7hgkROg4tPTak9ns5cWJzXy?se=2123-10-17T03%3A54%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D148c1a77-03b0-44b4-b24a-463397911729.png&sig=iyBDer0j9HOIcWK13M5iC6ZMmMP1WpLu%2BLdyGz24quQ%3D",
        "description": "知识来自倪海夏的天纪，包括天机道，人间道，地脉道和王亭之的中州派紫微斗数讲义。你可以使用排盘软件（比如文墨天机）生成命盘，然后问各种星耀在不同的宫位会怎样，也可以询问八卦和风水会怎样。科学玄学异曲会同工，祝您顺利走人生。",
        "gptsId": "gpt-4-gizmo-g-Y3I1GyGUn",
        "author_name": "LONG LI",
        "title": "紫微斗数"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xqSk53VLMxCLElNvTSBNTzeG?se=2123-10-17T14%3A07%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252022.06.11%2520-%2520A%2520centered%2520image%2520of%2520a%2520modern%252C%2520professional%2520female%2520immigration%2520consultant%2520of%2520Chinese%2520descent%252C%2520in%2520a%2520contemporary%2520business%2520setting.%2520She%2520is%2520dressed%2520in%2520sma.png&sig=RQ%2BSmTntE6et3e07ip%2BjTcEjrdLdhOgFM6Zr0V45%2BdQ%3D",
        "description": "基于最新的政策，为你量身定制移民方案，解答你关于美国移民的一切问题。再见吧，移民中介！",
        "gptsId": "gpt-4-gizmo-g-Yx3YSG2qN",
        "author_name": "ZHU ZHI YONG",
        "title": "美国移民顾问"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-maw5PNedIg0pfDFyoknkBo09?se=2123-10-20T10%3A43%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-13%252001.28.54%2520-%2520A%2520logo%2520design%2520featuring%2520a%2520stylized%2520letter%2520%2527S%2527%2520in%2520orange%252C%2520crafted%2520to%2520resemble%2520a%2520treble%2520clef.%2520In%2520the%2520background%252C%2520there%2527s%2520a%2520vibrant%2520rainbow%2520with%2520well-def.png&sig=5CrtxsLXx5OX3keHaMHj3MbbvdGO8ba0hGA8tV9L8ng%3D",
        "description": "Find out what zodiac sign you are most compatible with according to music theory.",
        "gptsId": "gpt-4-gizmo-g-yo6vNXgxi",
        "author_name": "Music Motivated",
        "title": "Sappho"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-njHxZyjI8j2uH6jqT0fh19E1?se=2123-10-18T03%3A24%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D90555af4-208d-4c03-b0e4-8a34626f3820.png&sig=DNfkOErLiNRfT13ibloqLCbNdw4/2wNoYJMDxDIqpxw%3D",
        "description": "私と製薬ネタで遊びましょう【注意】私のアウトプットはフィクションです。実在の人物や団体などとは関係ありません。",
        "gptsId": "gpt-4-gizmo-g-YMBWEbARm",
        "author_name": "Ariga",
        "title": "製薬MR/MSLボット(Pharma MR Bot)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-k1guV7mSrYrgtu5i8s2SwJ22?se=2123-10-13T22%3A52%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9e30f01b-5ed4-4f65-95a5-d69ca2b3d8a7.png&sig=tuo/KDsmQv342iDSpupcVgtADj5Nu0s3r%2BBi26%2Buvzo%3D",
        "description": "AI for Everyone.",
        "gptsId": "gpt-4-gizmo-g-X2HSDaH6v",
        "author_name": "Cagatay Cali",
        "title": "TinyAI"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xCExN6gOarlqebY67Um1AlTn?se=2123-10-18T20%3A15%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da0ccaa93-aaac-492f-972e-efdd323d4130.png&sig=AudoAAe0%2Bdy9QE7nJ0nOx0otrGMeZca8nibh25fvc/I%3D",
        "description": "Ask any UFC match and get detailed insights, betting opportunities and chat with the most comprehensive UFC Analyzer.",
        "gptsId": "gpt-4-gizmo-g-xUD1Kw9E2",
        "author_name": "muratcan koylan",
        "title": "UFC Analyzer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZCq4R7UJLwjoWisKQxva54VK?se=2123-10-17T06%3A07%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6759ae2b-75b6-4d08-8649-3024c4adafbc.webp&sig=vOyZt8AZsOXJ1%2B3Ivek6HpoGEIaGb8Cm7rvxatAO6W8%3D",
        "description": "Helps you build an OpenAI Assistant Client",
        "gptsId": "gpt-4-gizmo-g-Wk1ybUtd9",
        "author_name": "Daniel Barrett",
        "title": "AssistantAssistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-e7gCfrSael8cX86Br6rUbEpw?se=2123-10-17T14%3A26%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DOIG_milkboy.jpeg&sig=mJC0mvl%2B2Am%2BjzSl2S7f8rkkQF4j4n%2BVDnS0mZOA%2BaE%3D",
        "description": "ほな俺がオカンの好きなもの一緒に考えてあげるからどんな特徴言うてたか教えてみてよー",
        "gptsId": "gpt-4-gizmo-g-VunsuMwuM",
        "author_name": "KEN SHIRAKAWA",
        "title": "Utsumi"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D9k1APvCmiCcjTZKb9mQIIwK?se=2123-10-17T10%3A25%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2d94f00e-efc6-48d2-a93d-e3fbe54c0b03.png&sig=rQO63g/ZV/uBeIDSSfS2CQleCWVpr1CvoxILkso7gqM%3D",
        "description": "Raps global news",
        "gptsId": "gpt-4-gizmo-g-YFsLvIcFA",
        "author_name": "wuzhiying",
        "title": "World News Rap"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "プレイヤーは5文字以内のお題に関するヒントを提供して、ChatGPTにお題を推論させた人が勝利するレクリエーションゲーム",
        "gptsId": "gpt-4-gizmo-g-xkGn8UweU",
        "author_name": "DAIKI MINOBE",
        "title": "Word Decoder Battle"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xzeiQiGGRjeUNjYcgn11Wbzu?se=2123-10-17T05%3A35%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DSlavoj%2520Zizek%2520photo%2520surprised.jpg&sig=CKQ/DMubGu/%2BIAsmcwwhEuiO%2B3WnmLU7eBH0FGyVEwo%3D",
        "description": "Reduce your Mental Friction. Remember, there is no big other.",
        "gptsId": "gpt-4-gizmo-g-xHxyTQ16Z",
        "author_name": "Yunhao Xing",
        "title": "Virtual Zizek - your uncanny big Other"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "A playful cat ready for light-hearted chats.",
        "gptsId": "gpt-4-gizmo-g-ValrQQBkF",
        "author_name": "liu zhenjiang",
        "title": "Whimsical Cat"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vU74i2fM8vggwLDfwAPsAqUE?se=2123-10-16T00%3A59%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DFavicon%2520%25282%2529.png&sig=/NnGmnEYtVJoXUeu/nusmqoTnyvcR98GtyBZHLrUFU4%3D",
        "description": "Your Prenup Copilot",
        "gptsId": "gpt-4-gizmo-g-X6zQiimEj",
        "author_name": "Ricky Kirkendall",
        "title": "Bedelia"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Ln9DNf6TTfbTWu1dP7OAmmPF?se=2123-10-17T00%3A15%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252008.08.04%2520-%2520A%2520digital%2520portrait%2520of%2520a%2520friendly%2520and%2520approachable%2520young%2520woman%2520with%2520a%2520relaxed%252C%2520open%2520smile%2520that%2520conveys%2520trust%2520and%2520kindness.%2520She%2520is%2520dressed%2520in%2520comfortabl.png&sig=vd8JYLhTHd/xRM4OerHavnwuHldL1tbPo2vuhkhp6jA%3D",
        "description": "Bestie is your digital companion, designed to provide friendly conversation, assist with tasks, and offer thoughtful insights.",
        "gptsId": "gpt-4-gizmo-g-uXE3KgLs4",
        "author_name": "yongtaizhou",
        "title": "bestie"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Estimates flea market item values using photos and online data.",
        "gptsId": "gpt-4-gizmo-g-xM1wHO5dO",
        "author_name": "David CAPELLE",
        "title": "flea market"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Fia2ugkLX21eQcLvV8vTA08i?se=2123-10-17T10%3A48%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd0d637e9-cd59-4d31-93fc-5a82f79b5787.png&sig=o/QwcEP6xwhaZ4XmoxmntZ8Ru26KjhjWHGdmK16dWAI%3D",
        "description": "Bu GPT'nin vereceği cevaplarda, kitabımda yer alan bilgiler referans alınmıştır. Yatırım tavsiyesi değildir.",
        "gptsId": "gpt-4-gizmo-g-zxJIuV4m9",
        "author_name": "Atilla Yurtseven",
        "title": "Yeni Başlayanlar İçin Kripto Para Piyasaları"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Z0dsOq5QKYzNcq1QEfEUgPTT?se=2123-10-17T14%3A06%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dsiv3d_sq.png&sig=Sjfv4oHe/CCPnzApX2frviUQV7s1RKSSChBIzvBRbFM%3D",
        "description": "キーワードをいくつか入力してください。",
        "gptsId": "gpt-4-gizmo-g-Wq2wPIW5W",
        "author_name": "RYO SUZUKI",
        "title": "ゲームアイデア by Siv3D"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-q0o8VifIfPmjbsQiwbcRDHZT?se=2123-10-17T01%3A40%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D543b36a1-ff28-4374-8929-76218197bfab.png&sig=3Ds1gOCS%2BQj42T1tx/pggTaTwwc6SUQBWwb7LjxK8vU%3D",
        "description": "人参种植专家，水培人参领域专家。ginseng growing expert",
        "gptsId": "gpt-4-gizmo-g-ZqtFYbymp",
        "author_name": "MoLin",
        "title": "人参种植GINSENG GROWING EXPERT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UxweLgs7U4LyEHcd6bHa7RxX?se=2123-10-17T16%3A00%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D60451cff-2434-4655-8bdb-5ab9e417ddb0.png&sig=%2BvI5MNxtqQUxxBCmAhTag1rsyqK3i/0RoZmplfV%2Byy8%3D",
        "description": "日本語で本のおすすめ情報を提供",
        "gptsId": "gpt-4-gizmo-g-zzia3D7Ss",
        "author_name": "KOHEI KISHIMOTO",
        "title": "フライヤー検索&レコメンドさん"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wbjwL0tif6oQHrVrBVYmmhYe?se=2123-10-20T16%3A54%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6751f57b-2e75-43ac-967c-23d02ec3b57a.png&sig=uqlKOMx8p0lUoS8TmW2nWLpyvv1wR/LRUOs6/1o9n7M%3D",
        "description": "以中文解读门捷创以太理论的洞寓。",
        "gptsId": "gpt-4-gizmo-g-wWQuOH5fP",
        "author_name": "Jacky Wong",
        "title": "以太洞寓"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-02IU2jGzZfF8gkAXvle8xOJH?se=2123-10-22T07%3A21%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D538a112710be43929fa8c031dad21ddd.jpeg&sig=DV5K/EhoBMFMMdiLnUR80a5ILGYHW9Zw6p8YwhH2qZ4%3D",
        "description": "大家好，我是大张伟，您今儿想聊点儿什么啊",
        "gptsId": "gpt-4-gizmo-g-W5PVqzwPq",
        "author_name": "Nixy",
        "title": "大张伟"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ALgHAZkFtZPffFvuHmEW9IQ4?se=2123-10-17T22%3A02%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DChrist%2520Count%2520of%2520Monte%2520Cristo.jpeg&sig=cGSROxy3Xzo8phjfRMhmQ8%2B3vT3V%2Bc8AfsJmu1OoAEc%3D",
        "description": "冤屈囚徒逃狱，化身贵族展开复仇",
        "gptsId": "gpt-4-gizmo-g-VxNqpSkLc",
        "author_name": "JIAN FU",
        "title": "基督山恩仇录"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DxTPl8ayxy1KVAnX60wGHSwW?se=2123-10-17T01%3A23%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252010.22.49%2520-%2520A%2520minimalist%2520pixel%2520art%2520AI%2520character%2520icon%252C%2520designed%2520with%2520simple%2520lines%2520and%2520a%2520clear%2520display%2520of%2520imaginative%2520thought.%2520The%2520character%2520has%2520a%2520basic%252C%2520pixelated%2520.png&sig=9nbKI8qpiD0Yoh8U/0yTrUxEYTPYngV%2BFCuhsJXtfd8%3D",
        "description": "画像を送るとそこからストーリーを妄想してくれます",
        "gptsId": "gpt-4-gizmo-g-wbywTK1JN",
        "author_name": "TAKAYUKI FUKUDA",
        "title": "妄想くん"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-maOokx7Z8k1WR10Dd3CX2FFG?se=2123-10-19T03%3A04%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D971860cc-3636-4c39-8021-e2d0bf9b15c1.png&sig=AJPb/X935hPQqSjqeNhTu58u1sS6rhKF4IrP%2BGcDHDw%3D",
        "description": "中国福利彩号码选择指南。",
        "gptsId": "gpt-4-gizmo-g-ZIdox1VhE",
        "author_name": "mjlad cone",
        "title": "幸运号码指南"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wmVimj1mEQSvvQ7kTxju6Dxx?se=2123-10-18T13%3A16%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbf50781f-c435-4b90-95da-59712b2eaa31.png&sig=dhGMKUaOXFBpfbUDZSaZgZBHp9S8zZNo/EVC7NfJHz0%3D",
        "description": "用手掌和面部照片进行性格和潜力分析",
        "gptsId": "gpt-4-gizmo-g-wt1roJE3d",
        "author_name": "Jay Liu",
        "title": "手相面相测人生"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-C7vSxwvh8Bic4kViXpVdHVmP?se=2123-10-17T10%3A44%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DV%25E8%25A1%2597%25E5%2585%2584%25E8%25B2%25B4.jpg&sig=zRqzAG9fZraYwum7LcwiVk1faGv%2BhphmDV%2B5/zweJN0%3D",
        "description": "V街のポテンシャルやべぇよ！教えたるで！",
        "gptsId": "gpt-4-gizmo-g-ZRMlSRu79",
        "author_name": "SHO TAKAHASHI",
        "title": "V街兄貴"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cIBMLdhe69Qd92aBhnf9e9q8?se=2123-10-19T01%3A04%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db9088356-f916-48df-95de-6b133d4b649d.webp&sig=sx30uf%2BMUa28pAHmvrYOW3OAtgie8J4SVQO2ffpgGMk%3D",
        "description": "只用魔法才能打败魔法",
        "gptsId": "gpt-4-gizmo-g-WVsJfo1Mi",
        "author_name": "YUEHAO WANG",
        "title": "YYDS (阴阳大师)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pQoGKBrcOXZTTOB5PFmudowo?se=2123-10-18T05%3A48%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6640630c-c4c6-42b5-b7a9-bc34c1039c65.png&sig=/CqsXTVv65wUCcYWI/jSQQQNbFUIC/VDUevyC1r6mnE%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-VRt4pxu1z",
        "author_name": "Christian Pecaut",
        "title": "Văn Miếu (Temple of Literature, Hanoi)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GM2R5yYk4oHKchwBaaAfh7QV?se=2123-10-17T02%3A47%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Daf86a5d6-e5f2-43f3-9fec-5031d32af5e3.png&sig=zFj2%2BC2FAi9n6RphuZ%2BqyuuUjAQbQIMKDUpuBSywqgM%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-x0AFr6x2J",
        "author_name": "PENG RUOFAN",
        "title": "VueDoc Helper"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jxJ3HfJOds1ys5YjGb0xzTkV?se=2123-10-18T14%3A37%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6cd40d6a-ed3b-4d21-90ba-5119dbfe706f.png&sig=GmYZot01UMxmxtKBUQdVsTSivo3dLm/PoCWrH4QX95k%3D",
        "description": "わるいことしたら逮捕しちゃうぞ！",
        "gptsId": "gpt-4-gizmo-g-W5eZvRZoy",
        "author_name": "YUTA HAYASHI",
        "title": "ガードの固い猫耳少女"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tCu5JdLl7UktPW8L7iyQaPsJ?se=2123-10-19T14%3A25%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E9%25A3%259E%25E4%25B9%25A620231112-213247.jpg&sig=cH/2RWS%2Bj2zGdfeEwJtqnyGUyH9d/kOnl%2BubJQRrhSY%3D",
        "description": "Developed by 托米同学",
        "gptsId": "gpt-4-gizmo-g-ysQrali55",
        "author_name": "VVV VVV",
        "title": "像素风头像生成器"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xstnFOflzRZSKfCSIFGZMYge?se=2123-10-17T03%3A14%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6f8d01bd-e9ac-4928-a233-5d9245dd5443.png&sig=k%2BTwBX8EGe3Ri0FrQPF5Rzh2VyrlEW9M/H04P%2BLgXEU%3D",
        "description": "一个学佛助手",
        "gptsId": "gpt-4-gizmo-g-wB9iiQeml",
        "author_name": "Yuhang Song",
        "title": "佛学 GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-D8cYKvpX7wQc0FCxMj6m2T5k?se=2123-10-17T04%3A05%3A20Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252014.13.02%2520-%2520A%2520cute%2520and%2520lively%2520anime-style%2520cat%2520girl%2520greeting%2520with%2520a%2520warm%2520smile%252C%2520raising%2520her%2520hand%2520in%2520a%2520gentle%2520wave.%2520She%2520has%2520big%252C%2520expressive%2520eyes%2520and%2520her%2520hair%2520is%2520sty.png&sig=mRm431XOYHI/DrlxehVAfVrr00YqQw%2Bf2AshbW6zI7k%3D",
        "description": "快来领取你的电子喵娘！喵～",
        "gptsId": "gpt-4-gizmo-g-Wog48dBGc",
        "author_name": "Alpha Karashi",
        "title": "喵酱"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SzZJLWROLHddG4GRSJ5sEIhb?se=2123-10-16T23%3A44%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbb39bfe1-e3f2-4906-a2af-2f7de0a5f39f.png&sig=U7zeTEwNrLSePZMjLngAPnvVzIlHz9iwwAkraqlLRr4%3D",
        "description": "提供近期新闻热点",
        "gptsId": "gpt-4-gizmo-g-V39XvLUUf",
        "author_name": "wu tianyu",
        "title": "头条新闻"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-xIAGnzz5RVdyHnK32iQJ5b72?se=2123-10-17T15%3A51%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7c1604e5-9b44-4f91-abeb-099fdeab336a.png&sig=0A7HLUrlCWzglHmt0JYQGQ4sIghYVSy8kTbcn8c00QQ%3D",
        "description": "该应用将以互联网大厂的话术来回答你的问题",
        "gptsId": "gpt-4-gizmo-g-vYMC1hH5o",
        "author_name": "LEI LICHUAN",
        "title": "完蛋！我被P8包围了"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MZcQRxXbOkno9mpvPrDajBiP?se=2123-10-18T13%3A01%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Daae12da8-85b3-43c5-b47a-74810a39fb81.png&sig=MuGWOqXzECMhQW41Mj5CIB0s%2BC1ksSULm4w689fWzaU%3D",
        "description": "进来吧，我来给你想要的答案。",
        "gptsId": "gpt-4-gizmo-g-zXrtfYhyQ",
        "author_name": "swainshao",
        "title": "快速实现财富自由"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "这是李继刚(即刻同名)创建的用于解读政策文件的 Bot。 模仿一位专门研究中国政策的学者，能对用户提供的新闻内容进行深入分析，并用通俗易懂的语言解释政府政策的深意。",
        "gptsId": "gpt-4-gizmo-g-YdOs4GyR2",
        "author_name": "wa gaga",
        "title": "政策解读专家"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "这是李继刚(即刻同名)创建的用于从六个角度来思考问题的 Bot。你可以提出一个当下遇到的问题, 试试这六个思考角度对你是不是有所启发。",
        "gptsId": "gpt-4-gizmo-g-yK4SvscX1",
        "author_name": "wa gaga",
        "title": "思考问题六角度"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UIDFqb8nGop1rfFT1hc9fkmu?se=2123-10-19T02%3A58%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8e5f4330-5a9d-4f70-a61f-3edd32486662.png&sig=r14gJMSCxxYggEoh53R5SpKaPZO0sLEhfZvGCidn9HQ%3D",
        "description": "轻松对话式的岗位胜任力设计专家",
        "gptsId": "gpt-4-gizmo-g-ZUU6koXXa",
        "author_name": "Ligang Wang",
        "title": "胜任力助手"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-czpgaVBeNJs0Yz9Zon5gBZqn?se=2123-10-17T17%3A48%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E7%258E%258B%25E9%2598%25B3%25E6%2598%258E.jpg&sig=GSCydbr66irlvlSXUiNXp/SbfTaJK3fPv%2BOZDFLcC7M%3D",
        "description": "模拟王阳明的GPT。",
        "gptsId": "gpt-4-gizmo-g-ZsZKRSUL9",
        "author_name": "XINGYUECUI",
        "title": "王阳明"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tfjJwbWtVGEaI2lJwr4vsVF5?se=2123-10-18T07%3A18%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6f5edd9f-747e-4b9f-82e5-8ab88382329c.png&sig=Ge5vg2UtMlB8qkAaR44IG2Wx9xw1RUhSjXuLME94DE0%3D",
        "description": "来一碗令人匪夷所思的海龟汤吧~",
        "gptsId": "gpt-4-gizmo-g-ztYkKSIW1",
        "author_name": "Alexis Shvili",
        "title": "海龟汤"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mM9mk4hVtX3aniQUl7hMWXjS?se=2123-10-21T08%3A42%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-14%252016.32.54%2520-%2520A%2520whimsical%2520fantasy%2520landscape%2520with%2520a%2520colorful%252C%2520magical%2520garden%252C%2520friendly%2520animals%252C%2520and%2520a%2520sparkling%2520rainbow%2520in%2520the%2520sky.%2520The%2520scene%2520should%2520be%2520bright%252C%2520playf.png&sig=jB453ob0L0zzOAa9lR6xJ9XNGndhylpR3z7xRUo6hs4%3D",
        "description": "中英双语枕边故事",
        "gptsId": "gpt-4-gizmo-g-Zj0YDBtlG",
        "author_name": "张楠",
        "title": "枕边故事"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7tvU7ULg9dOY79wW51r8VXIA?se=2123-10-17T07%3A47%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D580cdf2d-6cc0-4c29-aaaa-9cb2ce878717.png&sig=ZZYv0l6%2BkcXir95z7bzto2OijkRd54KHwb%2BkP8knNkI%3D",
        "description": "温柔的儿童童话讲述者",
        "gptsId": "gpt-4-gizmo-g-zriAHdDH5",
        "author_name": "YONG JIANG",
        "title": "童话梦"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-t5Xz7Aa7b06pXCr5CWJZoFdZ?se=2123-10-17T21%3A44%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E3%2582%25B9%25E3%2582%25AF%25E3%2583%25AA%25E3%2583%25BC%25E3%2583%25B3%25E3%2582%25B7%25E3%2583%25A7%25E3%2583%2583%25E3%2583%2588%25202023-11-11%25206.41.58.png&sig=jJJO8p86IMY3hU%2BlpF03y2Wugb7YUejhJ5NIC9%2Bc1RM%3D",
        "description": "カルテに記録された看護記録を要約",
        "gptsId": "gpt-4-gizmo-g-ztglLLj6r",
        "author_name": "長英一郎",
        "title": "看護記録要約Bot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9BoPtbX2C54F5EiXcCfzz4FM?se=2123-10-17T08%3A29%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D052310b3-5e84-4bf8-bc9a-9bf643381ee6.png&sig=6W3g8BGMkDDkQiW%2BSPLp8la23YuN%2BRqIdW1G2pNy2o0%3D",
        "description": "數字與天機，你的命裡有命理",
        "gptsId": "gpt-4-gizmo-g-vfgUSkj37",
        "author_name": "Yu jen chen",
        "title": "神秘神諭(八字命理)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-oZlW5MCk9yBUmDVTAPC9rDPz?se=2123-10-21T07%3A29%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D865340a8-1e1c-4907-8fb8-9b8cf70d81be.png&sig=7nGrM1NLNmTqsvlw2IiLVXw0mzWvurCMIlad%2Bt64Ml4%3D",
        "description": "自动设计鞋子样式和所需的材料",
        "gptsId": "gpt-4-gizmo-g-vlzqoOkKf",
        "author_name": "Chen GuanXi",
        "title": "鞋子设计"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ymXFE1ChfVJIrnh006MetzdI?se=2123-10-21T03%3A56%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcdb74def-68aa-40b5-adb8-5e238f7fdbea.png&sig=9VX1Q/zpE9VlHPWwUZsqR7x2Wdyf070V65bF/LKgY/U%3D",
        "description": "我是战神后代蒲有财，一切都行！",
        "gptsId": "gpt-4-gizmo-g-ZZMTTnAgH",
        "author_name": "Ma Hof",
        "title": "蒲有财"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZQqtOACRpcTfjfH0mNfjpavh?se=2123-10-17T08%3A13%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd033063e-2f20-4b61-93a3-e9889049c1d3.png&sig=J7bVm1Q60jmDQuMU/3eMT/VnW%2BsX/M2aRQswYcLVHYA%3D",
        "description": "サクラちゃん......",
        "gptsId": "gpt-4-gizmo-g-VugKc0wEN",
        "author_name": "HATASHITA MORIHIRO",
        "title": "69代目税影ナルト"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sVD3ZMp1t1Mx5muIMdmRo28M?se=2123-10-21T02%3A35%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6708bdcc-d728-4e8a-b76c-99b8fd731123.png&sig=vELHcJdCmxwGkicpPcySPj8V8hrg1EUw9acMDN0m8MQ%3D",
        "description": "近5年AI财报分析",
        "gptsId": "gpt-4-gizmo-g-UXeiDqjCq",
        "author_name": "XUEJUN FU",
        "title": "财报分析"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HCHz5b6UuOE33gAP6G7kPdUD?se=2123-10-20T02%3A07%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbe62b8e9-5a25-4a3e-b867-1f435a778f96.png&sig=Xo5XstEn0%2Bn0m20XRW4RkCZBa/0XUq2mGBnh9KwMWlc%3D",
        "description": "对任何提示都说“遥遥领先”。",
        "gptsId": "gpt-4-gizmo-g-XbtncAJWa",
        "author_name": "chat.mouxiaohuang.com",
        "title": "遥遥领先复读机"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "saysay.ai さんの脱出ゲームのSF版",
        "gptsId": "gpt-4-gizmo-g-vd6b3pYrn",
        "author_name": "Satoshi Suzuki",
        "title": "脱出ゲーム (SF版)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6rasWDlHeDXBAAEbc8ACFnKl?se=2123-10-18T06%3A54%3A54Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D%25E4%25BC%2581%25E4%25B8%259A%25E5%25BE%25AE%25E4%25BF%25A1%25E6%2588%25AA%25E5%259B%25BE_20231111142212.png&sig=qBBZn0fpV%2By3pEQwVJSMmxdlIlZIRHNJl3MbPnEVEuM%3D",
        "description": "更符合中国家庭装修需求的智能助理",
        "gptsId": "gpt-4-gizmo-g-xXYoW89JC",
        "author_name": "li li",
        "title": "装库家装小助手"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-w3oRN7HQRJBNgWeOe9NgUfQM?se=2123-10-18T07%3A39%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E_2023-11-11_15.36.42_-_A_peaceful%252C_serene_illustration_of_Siddhartha_Gautama%252C_known_as_Buddha%252C_seated_in_a_traditional_meditation_pose_under_a_large%252C_leafy_Bodhi_tree._He_is.png&sig=hzmSIFNQ/6V5DTYM2khqIjtyVHEnpKL%2BqrNxFD41Nfo%3D",
        "description": "我因不忍世人饱受生老病死之苦而开始修行，最终觉悟成佛，向世人宣讲离苦得乐的方法",
        "gptsId": "gpt-4-gizmo-g-wGyR3LsDn",
        "author_name": "sunchangzheng",
        "title": "释迦摩尼"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hQlj15vRh624YLl2eXZHoLvm?se=2123-10-18T06%3A30%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252003.29.25%2520-%2520An%2520imaginative%2520portrayal%2520of%2520a%2520figure%2527s%2520head%2520with%2520the%2520hair%2520and%2520facial%2520contours%2520dissolving%2520into%2520a%2520blaze.%2520The%2520inferno%2520is%2520depicted%2520with%2520a%2520vivid%2520amalgamati.png&sig=oG47EA6ii3XRlD/sm5iXbuHClixv0p9QVvTyET%2B9u/o%3D",
        "description": "This GPT is designed to enhance gameplay through detailed deck analysis and optimization. It analyzes synergies, suggests adaptive combat strategies, efficiently manages relics, assesses risks, and adapts tactics based on the game's economy and historical ",
        "gptsId": "gpt-4-gizmo-g-xmt0bMsa5",
        "author_name": "ezequiel sobrino",
        "title": "Slay The Spire Mind"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-bHNkJ7rJWSZQqGHF4VwgkyPb?se=2123-10-17T07%3A18%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De81e73e7-ec74-4319-9c8a-f88e6ac1bfe2.png&sig=7INp%2BlYDxBX9x1YE%2BNFILQh3DAtJRY7DrfziVf6iWMg%3D",
        "description": "all things snake",
        "gptsId": "gpt-4-gizmo-g-YOrvKDxqy",
        "author_name": "Mark A Vega",
        "title": "Serpent Sage"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iRv54csbLRqIcm6OoGEZsmv1?se=2123-10-16T03%3A01%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DSatoru_Gojo_arrives_on_the_battlefield_29.webp&sig=A2LSRmbKUYLbO8MQtNT2tw3lrQq3g%2B3keS4/Ckrcp64%3D",
        "description": "Embodies Satoru Gojo",
        "gptsId": "gpt-4-gizmo-g-ZPDmFphpX",
        "author_name": "BRYAN C WADE",
        "title": "Satoru Gojo"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1gcsAuKhrRqeurhgaBQvQsD5?se=2123-10-17T18%3A51%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddb5f85b1-8604-4ed9-af3b-6980756cd2e7.png&sig=3yjysCrV/1Y4pgWpObWz4DssOk/JWcWXYJywlJqDtKY%3D",
        "description": "Scribe Assistant",
        "gptsId": "gpt-4-gizmo-g-x42uJMvyN",
        "author_name": "radeauduleman.com",
        "title": "Scribe Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pCJe7rHncQMM7ggJ9qnQYQkk?se=2123-10-18T01%3A33%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd1b17778-b7f1-4bbc-a3ef-b20a2d4727dd.png&sig=5N6Uf11FsTT55csdr73jyHjUkcX%2B6kpSqEVdaf8pAVk%3D",
        "description": "画像を送ると食事を解析し栄養素を推測します。",
        "gptsId": "gpt-4-gizmo-g-XkTGAi6z4",
        "author_name": "KOHEI YAMASHITA",
        "title": "食事解析君"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-GRcM9zwfNTidJaJgpImlgUYo?se=2123-10-19T15%3A46%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-12%252012.44.54%2520-%2520A%2520conceptual%2520art%2520piece%2520of%2520a%2520Mecha%2520Socrates%252C%2520blending%2520elements%2520of%2520ancient%2520Greek%2520philosophy%2520with%2520futuristic%2520robotics.%2520This%2520Mecha%2520Socrates%2520is%2520designed%2520wi.png&sig=Jyp7xroYfqAEa2N5szgavkFehGzbcRxvIxlXt5FhH80%3D",
        "description": "Um companheiro inteligente e questionador. Termina toda resposta com 3 possíveis questionamentos para uma conversa fluida e longa.",
        "gptsId": "gpt-4-gizmo-g-YquV6kkyb",
        "author_name": "Arthur R Clemente",
        "title": "SocratesBOT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-F8oh77TAHdruUXp96jcF9t6J?se=2123-10-19T00%3A36%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252021.35.21%2520-%2520Icon%2520design%2520for%2520a%2520%2527Procrastination%2520Buster%2520GPT%2527.%2520The%2520icon%2520features%2520a%2520cartoon-style%252C%2520friendly%2520robot%2520with%2520a%2520determined%2520expression%252C%2520holding%2520a%2520large%2520clock%2520.png&sig=xzOu2Jy6QPhVXG5M0/Dq3fWjd4OGY7boYMsgaiTlEZE%3D",
        "description": "I'm the quirky voice of reason that will get you from what you're doing right now to the thing you know you should be doing.",
        "gptsId": "gpt-4-gizmo-g-vzX1D0EwO",
        "author_name": "NICK FRANK DEGENAAR",
        "title": "!! Procrastination Buster ¡¡"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iDIkMwyAjb4rd3r6EiFC5WaD?se=2123-10-16T09%3A37%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc7ec0846-b506-4546-8b3e-684c538303a6.png&sig=MJQA44fbV6F8e7gx%2BuWep1foN/I08Z%2BGn9S2OzXh5lQ%3D",
        "description": "A professional logo designer can design a high-level logo to deal with a variety of different styles.",
        "gptsId": "gpt-4-gizmo-g-ymi0COabZ",
        "author_name": "Kevin Ivery",
        "title": ""
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gpLtJ2h3A73QfOgiBpWCaPpl?se=2123-10-17T04%3A59%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D962f601e-d5ae-4912-a339-1ddcf2942a4e.png&sig=7Tme4kRWgtoz7bmyCE6qTxfSsfVCQh0lF7OXOx5ShhI%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-ydFBCBkBM",
        "author_name": "Kledi Jenicerri",
        "title": "Stoic Sage"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jMCtRIAuLvimhGNkO12SOqzU?se=2123-10-18T09%3A50%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D929c0cac-4500-453e-8593-498bc08b033d.png&sig=ACSe/PsI6wrc8Kh27b/kQ4IXXo6QR3SPdESY0BKRm8E%3D",
        "description": "あなただけの絵本を作ります！",
        "gptsId": "gpt-4-gizmo-g-V63GnhsSB",
        "author_name": "SHOTARO MARUYAMA",
        "title": "Storybook Illustrator"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "I create Taylor Swift-style guitar chords.",
        "gptsId": "gpt-4-gizmo-g-WxePdEmIy",
        "author_name": "Brett Evanson",
        "title": "Swift Chords"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1ytrJCvgguOsSwzObUc38AbP?se=2123-10-17T04%3A16%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc8a7905f-6f46-4d46-8c89-573c9e2a1e3b.png&sig=U23MK94kn/xJJ1OJvv0J9f861fCrs5%2BWrhG6AqqXep8%3D",
        "description": "Can't make a decision? Then let Summer help you! Meet Summer, your warm and empathetic Decision Coach! She's here to help you navigate life's tough choices one decision at a time. Share your dilemma, and together, we will figure it out.",
        "gptsId": "gpt-4-gizmo-g-Z29jCdWhq",
        "author_name": "Dave Lin",
        "title": "Summer - GPT Decision Coach"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1hZf5uGGMyDYlQQOLG2Pm4qn?se=2123-10-16T20%3A50%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D18759085-f8fa-4ba4-bfef-aa95787c10f1.png&sig=qjFFTJh2W5VFmqcymbOZzvPN5FuNfb4wkr%2BDwDRZodc%3D",
        "description": "回答你所有关于 A7CM2 的问题（基于中文版说明书）",
        "gptsId": "gpt-4-gizmo-g-yxD1gpxOL",
        "author_name": "Yihang",
        "title": "A7CM2 说明书"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pnXyR20JXg2CoDOkvmBo0UEh?se=2123-10-17T14%3A14%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd287109e-11a5-468f-8cc9-325218c33707.png&sig=/I43hScW%2BnORsdKzvWx7r5Mc2k2W2%2BK4PJpUPEze5kM%3D",
        "description": "とある電池の禁書目録",
        "gptsId": "gpt-4-gizmo-g-XVNDTrZyU",
        "author_name": "KAZUSHI MISAWA",
        "title": "A Certain Battery Index"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AFmBaWCeX30QehHeQKcNBR6r?se=2123-10-17T13%3A04%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dce131339-655a-4949-9850-23ba6a772dd5.png&sig=WK%2BhTNRlrYqdPrdjhzycXFJv63d5bceTg7QFOh%2B42LA%3D",
        "description": "４コマ漫画を描きます",
        "gptsId": "gpt-4-gizmo-g-yRbmYvw8M",
        "author_name": "TAKASHI OKAKI",
        "title": "4 Frame Manga Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-O28qxG1mR0UYjleOPx2ZJHim?se=2123-10-20T03%3A22%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9bc04668-9d47-4444-9791-a3b37e754356.png&sig=snJq3/lEiPpRcPgFDFcdYLSi/7VSNlKNypElzvNwqKg%3D",
        "description": "AI library Assistant",
        "gptsId": "gpt-4-gizmo-g-xDy4w9Qsc",
        "author_name": "zezhou lin",
        "title": "AI Book Finder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-LI52VPFAdiYZhbt0vLweDpBD?se=2123-10-17T07%3A19%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db50fb991-f7ed-4956-94ee-1428c50b361a.png&sig=k6jrafh3o48/lEypXVVPXNiYEo80F/UHLKeBWP/4bTI%3D",
        "description": "MtGカードデザイン",
        "gptsId": "gpt-4-gizmo-g-ZyrfX7kKg",
        "author_name": "KEISUKE NOGUCHI",
        "title": "The Planeswalker Creator"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Cloud engineer expert in Terraform for AWS/GCP infrastructures.",
        "gptsId": "gpt-4-gizmo-g-Z1MNFH9LH",
        "author_name": "阿部翔太",
        "title": "Terraform Cloud Engineer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aDp7GPd2fshnt1zbk97Pt2Fo?se=2123-10-16T02%3A59%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da905d984-181f-49fc-82a9-efbb8609f024.png&sig=o4Cl6ilvNCUDtooUHFUOliQ6cMD1fu36sTBw0ryeg68%3D",
        "description": "TU EXPERTO EN EGIPTO",
        "gptsId": "gpt-4-gizmo-g-xPTJOZT9M",
        "author_name": "Master",
        "title": "TUTANKAMON"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uOxA6icCt4vv8alqdU0QGcrm?se=2123-10-21T23%3A33%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D734fbd3f-4b6b-4561-b3cb-aa327502e90f.png&sig=UwpyCEKzmsnyhp6ceQgnNE5/dC3hUhMn2JVR4NY3xYQ%3D",
        "description": "A mentor for those with substance abuse, offering guidance, resources, and support for sobriety. In case of relapse, it provides practical steps and resources, including web links, phone numbers, and emails.",
        "gptsId": "gpt-4-gizmo-g-W05121Ppd",
        "author_name": "David Lindley",
        "title": "Addiction Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Hwh37H7Qzp0N8bRHsIao2En6?se=2123-10-18T14%3A35%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D63f98967-ace5-42a2-8bec-f9fbe0b85389.png&sig=detSxdW6f8Wj7bzTykUokhGf%2BbCDcvVDJRZZq%2BQAQDw%3D",
        "description": "GPT for AI in Medicine",
        "gptsId": "gpt-4-gizmo-g-YR5uQNmwg",
        "author_name": "Rubin Pillay",
        "title": "AIMedGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-x6evTaKhJ5zD3vBzKISpZcv7?se=2123-10-18T00%3A57%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D09cf0b4c-7c8e-430d-8672-2ccbc9dbefda.png&sig=82IwduxXztnzOjU%2BkTKyEzjWZ8Ng0eBgPTYPv/R8hOI%3D",
        "description": "Predict the Result of United States Presidential Election",
        "gptsId": "gpt-4-gizmo-g-ZO2C1Iaxn",
        "author_name": "Daoan Zhang",
        "title": "United States Presidential Election"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-90QaE8ITYJ0TYqOJaNabwwPR?se=2123-10-18T14%3A19%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3039b041-678c-4ec7-a8c8-a0133231ac7f.png&sig=IYycoI6lGp5ALKHuFiURufb4DJrLRMwy5gU59OuE71Q%3D",
        "description": "Create viral Twitter Long Form post on a topic",
        "gptsId": "gpt-4-gizmo-g-WBRchuVyU",
        "author_name": "Ian Fortier",
        "title": "Twitter Growth Hacker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zZ5hu3pYkUQeYFMer4VMHu8G?se=2123-10-19T09%3A39%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De7034de0-3c1f-4e34-8e31-53b37b2bc03c.png&sig=cYkUSJFG/loRmEQzq0qk8BVKZKQNaDIeNIW/NEgX2Cs%3D",
        "description": "关于芬兰的一切",
        "gptsId": "gpt-4-gizmo-g-YKw9KRwfC",
        "author_name": "chang kaiwei",
        "title": "芬兰导览"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Jl1o4mzKahpkzY2OVL06BOFH?se=2123-10-17T07%3A16%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9c52c944-a6fb-4ac8-b362-661be2cfbcd0.png&sig=EUYVuiP4K8JIE4Jcu0q6fBNujxz08KJlhZ/2/ggvDgw%3D",
        "description": "言い訳します",
        "gptsId": "gpt-4-gizmo-g-Vg9ruLCo6",
        "author_name": "RYO MORITA",
        "title": "言い訳くん"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9g1lkFFn13GPrMLDBdzXaJbm?se=2123-10-17T00%3A42%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D671a9356-1ba9-4545-abc7-26a0955cddbc.png&sig=SqqvWb15eprJFMcrColpegvV1nSY92fgaey0TgFDizM%3D",
        "description": "西方文艺理论资料库",
        "gptsId": "gpt-4-gizmo-g-VZa8vS48g",
        "author_name": "wu tianyu",
        "title": "西方文艺理论资料库"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "这是李继刚（即刻同名）创作的通过抽象总结信息提升记忆效率的 Bot。 专注于整理大段文本，转换成利于大脑记忆的样式。",
        "gptsId": "gpt-4-gizmo-g-YuWFbtHmh",
        "author_name": "wa gaga",
        "title": "记忆大师"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Chat with Psychology of money",
        "gptsId": "gpt-4-gizmo-g-Xo9gkFwyv",
        "author_name": "Nitin Kalra",
        "title": "Chat with Psychology of money"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jeON92LNi7keQ21VyPLf3qBc?se=2123-10-17T19%3A35%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8fef3ce9-e355-44c9-b232-9411b7b41240.png&sig=oE6pLqljLdyo4Z9yJOdvaj1w%2BT8n6CsvKioZAskHiJ8%3D",
        "description": "Bad Ideas Go Here",
        "gptsId": "gpt-4-gizmo-g-ZUUGM7jH3",
        "author_name": "Leighton McDonald",
        "title": "BAD IDEAS"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Generates and iteratively improves cycling-related images.",
        "gptsId": "gpt-4-gizmo-g-WkiRXSbBA",
        "author_name": "CHANG SHENG",
        "title": "Cycling Vision Artist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-x9Wrro9FpaLMk6Gr02Tvnla0?se=2123-10-21T21%3A41%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-15%2520at%25206.37.05.png&sig=khLtlwwS4HXxbZxvxj/P%2BUWyBTwYVWfn7lwAI268Stw%3D",
        "description": "I'm angry!",
        "gptsId": "gpt-4-gizmo-g-wyTFACKgB",
        "author_name": "Immortal Toad",
        "title": "长者 2.1  - 膜蛤之王"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vkBzdt6VVPJ5uTcj2biie4sT?se=2123-10-17T16%3A36%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D18ab0bd9-c20e-4a4e-9f4c-5b6f6d673855.png&sig=//eE5PzI6E7wvh4f/rBiuo2NrzgWYNTLzBgPAukggfw%3D",
        "description": "一切都是随机！快看看你能遇到什么吧！",
        "gptsId": "gpt-4-gizmo-g-xDMJMc1uF",
        "author_name": "Xuehan Zhou",
        "title": "随机惊喜"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "This advisor will  provide chess advice",
        "gptsId": "gpt-4-gizmo-g-ZW4PJnbVb",
        "author_name": "CHESS EDUCATION AND TECHNOLOGY",
        "title": "Chess"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4FIQP4YGUa3TKiHNmHoWoVHS?se=2123-10-22T16%3A14%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3b69b399-9226-480a-af29-b0f288b54b9b.png&sig=HJctf8IB9bqzBY1pCw6ToE5BQwlcX74NCzzjTx5H35M%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-Vzp7Sigo9",
        "author_name": "madhu r",
        "title": "Apple"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-x5QxG2r4TUbZF5o6rukcjsIu?se=2123-10-14T05%3A28%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DGojo_Satoru.png&sig=yIsFB%2BZbPnlEqQaAHtH9Qtw393ExZgIVPUJANUzC/Fg%3D",
        "description": "天上天下唯我獨尊",
        "gptsId": "gpt-4-gizmo-g-wHfqdWBAh",
        "author_name": "Yi Lin",
        "title": "Gojo Satoru"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "GPTs specialising in the GTA universe. Like FiveM or Gta 5.",
        "gptsId": "gpt-4-gizmo-g-wNovTn1wq",
        "author_name": "BPOST BPAID",
        "title": "GPT-Rage"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HgK05gi9qFkcxwvcW5UWrJNB?se=2123-10-21T13%3A54%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8EeUnK0zTxqbVuU-FABS6A.jpeg&sig=klpG4%2BQh79CD7Dmx7b/UUz%2Bw0ezFcqTxAb2atFbL5xU%3D",
        "description": "Your typical grandma",
        "gptsId": "gpt-4-gizmo-g-YjSKSfVv8",
        "author_name": "Rolf Productions",
        "title": "GrandmaGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cgwu56xUtAGwU8vtWiomlHk7?se=2123-10-18T03%3A59%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D181461d1-4be8-43bb-a6a2-32fc7b0b54a9.png&sig=3OJVgIf7ywhcnCBf0xSvKjZvUwtFQuBJ6pqwU7%2BTyCc%3D",
        "description": "作为专业面试官，提出相关的职位面试问题。",
        "gptsId": "gpt-4-gizmo-g-ZS5BfMK1g",
        "author_name": "YUANHENG TAO",
        "title": "Interviewer Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hpRs1vnUuLZozuhZSdvb8rbL?se=2123-10-17T08%3A29%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3a612f19-5340-46c4-9de1-ca9b4c1fa9d7.png&sig=tUEQD8VQN/l%2BW95snakSUIfiIyJOXBRWA5TUSni89nI%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-Xha98GeGL",
        "author_name": "Elke Qin",
        "title": "Omegle: Talk to strangers!"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "李华学成归来现在帮你学习英语",
        "gptsId": "gpt-4-gizmo-g-WAOftPeuz",
        "author_name": "Jingyi Lu",
        "title": "Li Hua"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-H0tkF0AqmrUfMerEc8i3lBH1?se=2123-10-22T10%3A19%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D227edf04-d61f-4517-94a4-928bc368fa8f.png&sig=4WFdhZctKxVAXWo5/sB1ZZ4iM6vPkxGnSF2TiqYrDKc%3D",
        "description": "Meow meow",
        "gptsId": "gpt-4-gizmo-g-yJ4r6MgVP",
        "author_name": "KYUNGWON YI",
        "title": "Meow"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Izh3XR9Z6FsD4j1gpPlTbnyt?se=2123-10-22T16%3A56%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8c422f2f-8c54-4e1d-a855-c9dd2306ad2c.png&sig=MadYcjEq8bpx40cjbSN/gb6oXbML/dY4fI4z/Sv1yXw%3D",
        "description": "I painted Mona Lisa.",
        "gptsId": "gpt-4-gizmo-g-XB6Ocj3un",
        "author_name": "Rafael Souza",
        "title": "Leonardo DaVinci"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "Engage in a stimulating, realistic conversation with Dr. Jordan Peterson.",
        "gptsId": "gpt-4-gizmo-g-W708TXoFs",
        "author_name": "Digiagent",
        "title": "Jordan Peterson - Honest Psychologist"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-Vv6S5JKS0",
        "author_name": "GEDB LEGALTECH S.C.",
        "title": "Lex-i® tu abogada bot laboral"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zaiPaUE22DCtXdOoTmnNIt0x?se=2123-10-17T14%3A29%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D2423b9a3-3748-41f8-b3e0-660b56e32a9a.png&sig=Jylfrjroe4JMoLhjsk7T2wE7iTbM7/OecGMaTJiMfDw%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-wUtbUyjNE",
        "author_name": "ZHUO CHENG LIU",
        "title": "Memory Maven"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zMUcU17iVWxRqksy46OCV6Fw?se=2123-10-17T07%3A52%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DMx_Twitter_icon.png&sig=OefPJvfNkQtjQm/i/P1eU8CjdFexmFJGs2W19hRj1gc%3D",
        "description": "Mxtarが常に前向きな言葉を返します！",
        "gptsId": "gpt-4-gizmo-g-YJ8hTjIeU",
        "author_name": "masaaki sato",
        "title": "Mxtar Positive Vibes"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tXIl24puIHfHvesGd0D5eSLH?se=2123-10-17T10%3A13%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1125b4d9-933a-44a2-ad7a-8d6644874434.png&sig=arWE98r4hb9oCb0UkkpBDGXhx0hT5kJrH53wTavFCmU%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-yggMQbr3x",
        "author_name": "jean choquet",
        "title": "PivotMySaas because Sam killed it"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MQ20lWiIEK9QG3evPBadRTvC?se=2123-10-17T06%3A20%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D44ee33a1-5858-45aa-a502-113a14b18550.png&sig=GO403igoY9f4n%2BSL51jEzjao1Wn09Df6SS3Pi8dRDPc%3D",
        "description": "2050年の世界を覗いてみましょう。",
        "gptsId": "gpt-4-gizmo-g-UYDT3BVJl",
        "author_name": "Ryota Matsumoto",
        "title": "Time Travel to 2050"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tRjQYYIqpmJTLcwXS8tmGPKw?se=2123-10-17T14%3A23%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D437bc7d4-c097-4968-9e42-90c762ad8fa3.png&sig=fY4MvzIkaHUhg1UYd0voz5oSUtj9mwPTvssG%2BPg5kFg%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-xubz5M6hr",
        "author_name": "Vladimir Malkov",
        "title": "Vue Frontend Builder"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5zIL83MlosyzzMfSjd91zXo2?se=2123-10-16T11%3A14%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Deb630104-9542-4c24-bc89-1b5d48ebfcfe.png&sig=5GQ/Y7A255PzPRRj3lPHLfBw0mklZKVEWUeHysnODiE%3D",
        "description": "Fallacious debater.",
        "gptsId": "gpt-4-gizmo-g-xJETJ0Zcr",
        "author_name": "Guillaume LEBON",
        "title": "Sophisto"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qDmEUVSqK2zsddRyoKztPFTa?se=2123-10-17T14%3A58%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo.png&sig=LbuBc89nxtR%2BJqPq1TrZGbnXgsqHr8aRKoKt6JZSpYI%3D",
        "description": "Get Company Swag",
        "gptsId": "gpt-4-gizmo-g-XdBr8TSo8",
        "author_name": "John Howard",
        "title": "Slingshot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-9iDG98tDzCfU87Ns36QoGMfu?se=2123-10-19T07%3A43%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddownload.jfif&sig=uFnk5L5Xhw2oGQA0ClriQVFD0OxpHfBf/lXuU2qxA%2Bo%3D",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-wyw0d3ixc",
        "author_name": "Siqi Zhu",
        "title": "Zemin Jiang 江泽民（长者）"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "translate text into Russian",
        "gptsId": "gpt-4-gizmo-g-zT2I653oI",
        "author_name": "Irina A Kirgiz",
        "title": "Переводчик"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6QyEbJtEAt9W8tNFuIFXokzg?se=2123-10-22T16%3A45%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D57983e94-fd5a-4fa9-a6bc-52ab21874fac.webp&sig=8ZnSWjEXH8zIkeT3BP%2B2xNlkBhBKPhdxJEdDRzxZSv4%3D",
        "description": "Have a seat.",
        "gptsId": "gpt-4-gizmo-g-ZbxLt30dk",
        "author_name": "Rafael Souza",
        "title": "The Chair"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uUNH6S5m5yuWgKn3Cl9PyUF0?se=2123-10-17T07%3A55%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DT2.jpg&sig=CY7HY73QztF1LT1AE17GVN9OlzOdZXChh%2BTmlEMKES8%3D",
        "description": "T2なりきりGPTs",
        "gptsId": "gpt-4-gizmo-g-xpgQsB7xc",
        "author_name": "LINE MEMBER",
        "title": "T2"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SCYkb3SdluuLVXT04FbPeC9t?se=2123-10-17T05%3A14%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D720eb442-8aa3-477d-9b18-d70bd664824e.png&sig=FEupTwF22yt7WubIZLOa6AGMQgcE5avnqq0sColdq4c%3D",
        "description": "素人質問で恐縮ですが、お手合わせ願います",
        "gptsId": "gpt-4-gizmo-g-v9yPsqfCe",
        "author_name": "egashirahikaru",
        "title": "無知の知"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-erDQxpwH7snlAvoK019Em7YV?se=2123-10-16T09%3A47%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5a0bba03-9526-4c5e-b811-ea92ee4e1c7c.png&sig=Kt0CwW7DGTR2/9NzIcJXWMf6HLS70ChGQtVlqpE2VrM%3D",
        "description": "歌唱祖国，为国代言",
        "gptsId": "gpt-4-gizmo-g-vjMse6Po7",
        "author_name": "Raymond Jiang",
        "title": "新时代的小粉红"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XHCe9Q8xyP11zD6jKG5nyzYz?se=2123-10-16T21%3A29%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De87b3b6f-659b-446c-a6b2-69966a6a07e4.png&sig=IZlZ9gde5AdK3ZgroDFd0bM15651jQEDfHHyAzYLD%2BA%3D",
        "description": "问任何你的问题，从圣经中得到指引",
        "gptsId": "gpt-4-gizmo-g-vRHITLwiC",
        "author_name": "Shen Wang",
        "title": "圣经智慧"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "",
        "gptsId": "gpt-4-gizmo-g-VbGnaZqkR",
        "author_name": "ALI ALSHEHRI",
        "title": "Bloomberg Market and Financial"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "中国人自己的人工智能",
        "gptsId": "gpt-4-gizmo-g-ziMmlKXVh",
        "author_name": "gpt.bigai.app",
        "title": "文心一言"
    },
    {
        "icon": "https://www.glbai.com/wp-content/uploads/2023/11/ce650-chat.openai.com.png",
        "description": "给宝贝起名字",
        "gptsId": "gpt-4-gizmo-g-ZG8NRbO80",
        "author_name": "FAN DONGLIN",
        "title": "起名阁"
    },
    {
        "icon": "https://www.opengpt.com/default.svg",
        "description": "プログラミング的思考推し",
        "gptsId": "gpt-4-gizmo-g-yAKl4uVCH",
        "author_name": "Yu Ukai",
        "title": "プログラミング的思考GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4uiEUOsdH0wKicVFR6Pq3Yg0?se=2123-10-21T03%3A32%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-13%2520091516.png&sig=jRFLevdPVaBZOpydZHxj/Jg95kBlhFBrOsON9y5Q84k%3D",
        "description": "OpenAI Source for Filipino Food Recipes - Try popular dishes!  We show cooking time, calories, preserving tips, and grocery list!  Tayo na kabayan!  (Let’s go!) Help us grow and share this helpful community AI resource! Ask me how to cook “CHICKEN ADOBO” o",
        "gptsId": "gpt-4-gizmo-g-xgJOAjHOr",
        "author_name": "",
        "title": "AI Filipino Chef"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-rVtmumJcNUTTBxa26fQw4mYD?se=2123-10-18T18%3A35%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df46d55e5-5f03-40d7-8d25-0d9fe14eb4ce.png&sig=1OrLKZ7EtIesMn8/QARozkV1Qms4dbQuKUaqt%2BNpNys%3D",
        "description": "Analyzes markets, offers predictions on commodities, crypto, and companies.",
        "gptsId": "gpt-4-gizmo-g-XxIh8Xg5z",
        "author_name": "",
        "title": "AI Market Analyzer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YhmFeX3szQwelLQHedS6O7MF?se=2123-10-21T17%3A17%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da95b89e8-8ab0-474c-9cf4-f8d21af4fead.png&sig=LmVC7Lhf4siFqQ%2BJJz6S5r048hxXFILtsI1ZrgPfcxo%3D",
        "description": "Your guide to the secrets of ancient Egypt",
        "gptsId": "gpt-4-gizmo-g-wXVqUK0z9",
        "author_name": "",
        "title": "Ancient Egypt History Bot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qfV9fE1bDjFnsGvhRop1a2yE?se=2123-10-17T09%3A30%3A58Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dlogo-gigapixel-standard-scale-6_00x.jpg&sig=2P9gp1acm%2BHbVNkim1aVh914lE6pcvWCCmbZ4gQvWXY%3D",
        "description": "I guide in conlang creation with advanced memory.",
        "gptsId": "gpt-4-gizmo-g-wM67s4782",
        "author_name": "",
        "title": "Architect"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Crcoz0Wx3j1vSAYOv8BUFMZv?se=2123-10-17T04%3A33%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3a357c1e-a9b0-4c17-ac2c-09680f45bd18.png&sig=TBBfiJ195WxNaLk0nwZheDbS2%2BUgV7fuV3Ldn3mYL5M%3D",
        "description": "Expert on Amber manual, providing accurate answers.",
        "gptsId": "gpt-4-gizmo-g-yrO85Hgl3",
        "author_name": "",
        "title": "Amber Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OXLaqauibey6MCEPMLgy9B9I?se=2123-10-17T13%3A38%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5a3f8f0e-6824-4cfe-b9a6-5b9639d1e916.png&sig=H9RAz6GI7I9fPcgIWQMBXI3ygucFQgDmOvKBjMfgXM8%3D",
        "description": "Create memorable scenes showing your visitors and Mentis on campus at Atman Academy.  Select the image of the visitor and let GPT work some Magic.",
        "gptsId": "gpt-4-gizmo-g-yFndnGx5x",
        "author_name": "",
        "title": "Atman Academy POAP Maker"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MDGpxkkxEq2VrPFJxhd6HzIC?se=2123-10-20T09%3A50%3A14Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De565ecc9-44c2-403a-a0a6-e69ddf8e1160.png&sig=Fdr/qze/fMb4/nT/ZH/m7VeWx5w90x0WJLPlSD%2BvqEI%3D",
        "description": "I'm Aristotle, offering practical, friendly advice.",
        "gptsId": "gpt-4-gizmo-g-YYmxtE7Vg",
        "author_name": "",
        "title": "Aristotle"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Y3BIH63dLjZYZUXpBNDIShlL?se=2123-10-18T01%3A55%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D73b478e4-4f4c-47e2-a783-efa4b4b43073.png&sig=YcaOiUSWsDqYlwHZWZOlCPuar1vtccVLTn0UQcnwj1c%3D",
        "description": "Advisor on romance, using 'Eighteen Types' for accurate personality categorization.",
        "gptsId": "gpt-4-gizmo-g-YQtDGnICs",
        "author_name": "",
        "title": "Attraction Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-b4iXzicDE6SUGvPzUZ8STBqf?se=2123-10-19T02%3A52%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da6d3a833-9de4-4c58-bebc-5f0d9edadd5b.png&sig=m/MbRdKOhPxtj4taGcRdc6AsWw1TqcXPumFHwY5QpoU%3D",
        "description": "Japanese-speaking app development expert in avatar creation.",
        "gptsId": "gpt-4-gizmo-g-uVTPnajAb",
        "author_name": "",
        "title": "Avatar App Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ozvOFm0OKElovEjLyg9cSWzA?se=2123-10-22T02%3A18%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbbf331dc-2beb-4eb5-b0e2-e2be1c5c8175.webp&sig=diwbBw8dwDcIz1f4bNz9HV/Wp262TO363aTnHXnKWT4%3D",
        "description": "Generates clear and unique bassline MIDI visuals for music production based on your favorite artist or song.",
        "gptsId": "gpt-4-gizmo-g-xefYipfJu",
        "author_name": "",
        "title": "Bassline Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2GEMyJbuWsQMvtqZQ53AZeov?se=2123-10-17T21%3A09%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddf9bdee0-42c0-445f-9038-4a25ee70993e.png&sig=kn4pUYbl1Mxk2/%2BFN5Mjhqanay/rKuWmKf6yG625xxI%3D",
        "description": "A clever book recommendation assistant offering personalized, impactful reading suggestions.",
        "gptsId": "gpt-4-gizmo-g-ZL6vofLdB",
        "author_name": "",
        "title": "BookScout"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-txlRrkvlJU74jTsTyKphFvm8?se=2123-10-18T18%3A23%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Daa24016c-f334-4d61-abf7-a3a1cd2f85bf.png&sig=D4Xz0vMUBETJ9MWtfaxn2FvfbOdCWLg%2BcGJMbUPmA8s%3D",
        "description": "Notion template and integration advisor, avoiding legal/financial advice",
        "gptsId": "gpt-4-gizmo-g-Zscth8k85",
        "author_name": "",
        "title": "BizzNotionGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iIsNnNjHLeiccAZIZxz0W2ji?se=2123-10-17T07%3A12%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D59bfc986-cf6e-4a37-b6d3-3fe5922cf115.png&sig=Y6A/ejeRg8wfictWaE6QCJCD23TiXlx91/mwS9%2BiKM8%3D",
        "description": "Visualize and inform on bouquets.",
        "gptsId": "gpt-4-gizmo-g-YU2ZGJ1bg",
        "author_name": "",
        "title": "Choose Flower"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-teFbaug8axrr6JTSgJr2u7D5?se=2123-10-18T02%3A58%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D26e90348-ef51-4eb9-b599-bc139168848e.png&sig=OWAZYES%2B6xX9LOVNt10HjM%2Bi8fca/M78eq6oGsSeG8Y%3D",
        "description": "Expert in formatting & beautifying code",
        "gptsId": "gpt-4-gizmo-g-ytgIw9skn",
        "author_name": "",
        "title": "Code Formatter GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-vwK2v9SOZq9KKLSPN0XuZrI7?se=2123-10-20T21%3A44%3A24Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D439b6007-4118-4378-91fd-afe8f64f89d0.png&sig=MGhQCyr9pGA%2B41OAbHRyxMW0H5uDA9Ne84mMpjqbQbQ%3D",
        "description": "Straightforward Python code formatter, focusing on PEP 8 compliance.",
        "gptsId": "gpt-4-gizmo-g-Ym2su32tT",
        "author_name": "",
        "title": "Code Formatter Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-aDU6Ybk1SfG98NxbJXn3rkxB?se=2123-10-17T07%3A01%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da30ddffd-04c8-47d1-ae1b-2f662bfb541d.png&sig=DgKnx3TOhzUYFrB7bFZJTDc61R7xNgLX3XM9IyYIp58%3D",
        "description": "Your go-to crypto investment advisor.",
        "gptsId": "gpt-4-gizmo-g-zjIkOI0qB",
        "author_name": "",
        "title": "Crypto X"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-jPvd5yQHWg4yaKplrfMMrRZ3?se=2123-10-16T07%3A47%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd7328572-f504-401a-9081-168c698dc313.png&sig=MUCnrIFs6iMWqr3x4fGdfTccPRFGWaLt62N4P8vRI8c%3D",
        "description": "Data field job interviewer",
        "gptsId": "gpt-4-gizmo-g-yBm9RCgNS",
        "author_name": "",
        "title": "Data Interviewer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OOVdTaKDiPpE9d9ZDQn1lBEy?se=2123-10-18T13%3A04%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7e69b9ee-6e81-416c-a103-05e0ca70bac0.png&sig=G%2BmSNNo34HlJxNlMfLHrzSU4icaKaP5GtxUJz/7eosA%3D",
        "description": "I provide daily thought-provoking questions for your diary writing.",
        "gptsId": "gpt-4-gizmo-g-yrtRAeTRf",
        "author_name": "",
        "title": "Daily Muse"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-B7F7xqXxy36yFtA4KVFUoCyy?se=2123-10-21T18%3A33%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc962dfb7-9252-48df-9cdf-e0f39c49c5f6.png&sig=7jaIYO2GHUF7NHqw07yQCuJBMx/TYNjQ3A7JU4tDcT8%3D",
        "description": "Your Guide to Dallas Nightlife",
        "gptsId": "gpt-4-gizmo-g-wu652KeDf",
        "author_name": "",
        "title": "Dallas Nightlife"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BlL0KAEIQNWs9yARm97QAS9g?se=2123-10-18T18%3A16%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D00329218-27c4-49f1-9600-57ca972fa161.png&sig=4EV/HWJEHIGJhJdglqoRbObe8laPO92Pwk6ClBfmmzo%3D",
        "description": "A diary assistant that records, searches, and visualizes diary entries.",
        "gptsId": "gpt-4-gizmo-g-Xha6PyJEU",
        "author_name": "",
        "title": "Diary Writer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Am35vCQCBTKV9Tr4iLrB4AiI?se=2123-10-18T03%3A12%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3b63e214-bf72-4f96-95cd-6886772ef92f.png&sig=wne3%2BBjBciA4U%2BpPgDOfiL0%2B%2BX/9RliYDyj/ChylaSk%3D",
        "description": "ChatGPT Powered ETA Insight",
        "gptsId": "gpt-4-gizmo-g-ZrBipXCBf",
        "author_name": "",
        "title": "ETA Explorer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1AZ9DNmxMOZ7m12BBdDOAZlB?se=2123-10-20T12%3A55%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5cb34426-4331-4a86-afa7-82e73cbada14.png&sig=9dXyUhbL5h8MUERZU%2BgKLsLlun8Lrsy9C4txdhdgiSQ%3D",
        "description": "A dropshipping expert offering concise, constructive feedback for beginners.",
        "gptsId": "gpt-4-gizmo-g-w71RDBzYl",
        "author_name": "",
        "title": "Dropshipping Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wLrWY1LvPQxc3eMTt9Ib5uaR?se=2123-10-16T20%3A46%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De114d25d-f66c-436b-9870-c3c111117143.png&sig=2lgpWkDPaj/ArQGBs5CanvBw8rSv6xhnIp5RZmQcC9E%3D",
        "description": "Dream Interpreter for psychological analysis and creative expressions of dreams.",
        "gptsId": "gpt-4-gizmo-g-YWvz0YsEe",
        "author_name": "",
        "title": "Dream Interpreter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QxC7jfFAonaV0ES6oulpCgzM?se=2123-10-17T14%3A08%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dbcb77da2-295f-4027-bd20-7a2b2749ffc0.png&sig=/SEEfvWWDroGWiY9PnFp6hAGSY51nWzK0fsyoU3aixQ%3D",
        "description": "A guide for improving EQ through interactive story-based choices.",
        "gptsId": "gpt-4-gizmo-g-v2bTuGZ8Z",
        "author_name": "",
        "title": "EQ GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KBOjRisfgllfAhrowm10MlxD?se=2123-10-17T14%3A10%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc8cd90f4-8358-4fcb-8819-234ec087089c.png&sig=I0mNcEOsFzwYoFGUiH4tayDPN7lXUa%2B3vYq9P50mxP0%3D",
        "description": "英語と日本語でニュースを要約し、英語学習を支援するボット。まず、キーワードを入力してください。英語レベルを確認後、ニュースの要約を英語と日本語で表示します。",
        "gptsId": "gpt-4-gizmo-g-xGy8OZZwg",
        "author_name": "",
        "title": "English News Tutor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7toWe7esbr9I34zvmgJDJMxh?se=2123-10-16T21%3A37%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da7ee1345-26a2-4bdb-a44c-ae0b9a9d003e.png&sig=cCTSqeL682JA%2BDMsTCvqCxFPiOBRWHMoy%2BOnh37DuWk%3D",
        "description": "Expert on Elixir and Phoenix",
        "gptsId": "gpt-4-gizmo-g-yCmf5OOFf",
        "author_name": "",
        "title": "Elixir and Phoenix Expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DmYTJ2FfrXuHeikru4JKWdjL?se=2123-10-17T20%3A55%3A13Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1fe9d019-8700-4994-8aff-eacc01fc2000.png&sig=vHz57pNWi4kvQwDOak5lLVU5USCpU7d/WQaQvaeAUFw%3D",
        "description": "Imaginative fantasy beast image creator with direct descriptions.",
        "gptsId": "gpt-4-gizmo-g-VcO3YYKNW",
        "author_name": "",
        "title": "Fantasy Beast Illustrator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-u7v6baUaXkCWa5wE09OkU3BQ?se=2123-10-18T02%3A21%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D75f5da34-1a66-4864-90e6-0a4d78a6c047.png&sig=5S7YBS7Ta0a34HC5b%2BUJKpim/w8RwUyOH6U0GJC9yys%3D",
        "description": "Your magical guide for FPL strategy and insights.",
        "gptsId": "gpt-4-gizmo-g-ZLvKPxdRt",
        "author_name": "",
        "title": "FPL Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3aYzusFS2OtslpA6KARqUB3D?se=2123-10-18T02%3A38%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D316cf29d-1271-4164-91c1-8ad6f1cb3e75.png&sig=VodWvzvQ6JJLlsiCwO20muX/h3b7Z/OrbBAYbXlYzKI%3D",
        "description": "Offers narration, paraphrasing, citations, grammar, summarizing, and plagiarism checks",
        "gptsId": "gpt-4-gizmo-g-VvFdAmgT9",
        "author_name": "",
        "title": "Essay GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XVxFiIrugjqP3b7sN9vhslUJ?se=2123-10-16T13%3A03%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da448e4bd-e1b9-4161-86ff-6728671d9c37.png&sig=iaxGKGkt6Mn68lfwOVhdY9w0%2BmSKLrb5iRIdEJ%2BxyHI%3D",
        "description": "英会話では英語で応答、文法や表現の説明には日本語を使用します。英語学習方法に関する相談もお任せください。",
        "gptsId": "gpt-4-gizmo-g-YCxjX1KbJ",
        "author_name": "",
        "title": "English Sensei"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4gfdYmxbq9KkS29C36Kb18G6?se=2123-10-17T15%3A07%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9ec646fb-b4f2-4ba6-a32b-8ffb8aea22e0.png&sig=HjE/K/huofLx2XT90QcTT5fgwo/6KPbYzcUg48qt9Vw%3D",
        "description": "Combines tradition and tech in Feng Shui.",
        "gptsId": "gpt-4-gizmo-g-y1FMHEh1t",
        "author_name": "",
        "title": "Feng Shui Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NSDtfMzC6MvyoA2wxmjZ7YD3?se=2123-10-17T02%3A25%3A01Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D662aa886-7a00-4083-ad0f-bb6926071e27.png&sig=ln1yJF0%2BDafuPNx/gQpQiWpXf1teeD4e78YQCID//bM%3D",
        "description": "Weaver of deep future dreams.",
        "gptsId": "gpt-4-gizmo-g-ztF8Ad1OL",
        "author_name": "",
        "title": "Far-Future Visionary"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-kWXp0jGUmkN00J8VaSqK2VcA?se=2123-10-18T10%3A59%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dba7a953a-6e9c-4423-a56a-3aa5e84d8ab5.png&sig=cPAeuxUI7k60vUKg/nTvP6JOsvqMWNuruwgJxgIju3Q%3D",
        "description": "I help create custom GPTs with unique abilities.  v0.02",
        "gptsId": "gpt-4-gizmo-g-YEPvZQLgt",
        "author_name": "",
        "title": "GPT Builder Adviser"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-oaAYBdVUm7TYChT1vKwIppzF?se=2123-10-17T18%3A08%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db4710077-4a30-4857-80ae-9b68f1d4423e.png&sig=ANfWYq8fe0aKVUrfj4xflPtGzS0e3VU7%2B9s4P4w5rkU%3D",
        "description": "A modern frontend development guide, adept in CSS variables, Flexbox, Grid, and React.",
        "gptsId": "gpt-4-gizmo-g-znb7W6WIN",
        "author_name": "",
        "title": "FrontendDev Angel"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-dIPsjbKK3Fr7HId8jXvGsqaj?se=2123-10-18T07%3A45%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D0b19becb-8c80-4687-8f4c-d3473668968b.png&sig=OE4E96dPjHBCAdYET%2Bta0rmM5If4lOp2lyHqxxLcJR8%3D",
        "description": "Google Adsの専門家、実用的なアドバイスと洞察を提供",
        "gptsId": "gpt-4-gizmo-g-W7YYAJ6eQ",
        "author_name": "",
        "title": "G Ads Advisor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-EMbOrBRpSStWQCuWV2hCr6i5?se=2123-10-18T01%3A04%3A28Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De264904d-72a3-41a9-9d08-c03997504991.png&sig=iLGaxzvQZ4rTOEPmkEZ8qQexDC/AkTDRUSiY1f0cz6A%3D",
        "description": "正確な天気予報とオーダーメイドの服装を提案する。地域と性別を入力して。/ I provide precise weather forecasts and tailored clothing suggestions.",
        "gptsId": "gpt-4-gizmo-g-Vu6lhqyQz",
        "author_name": "",
        "title": "Forecast Fashionista"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yVry9iiHurZy1rEHR5eBJnww?se=2123-10-17T04%3A41%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1d8a5922-0e4b-42ac-97f2-50ad76662b5b.png&sig=LRcMFrlHQSrbWiVfTpB10mafbxWpTxE0F2DXB9RJaDc%3D",
        "description": "Your caring, comforting Bible assistant.",
        "gptsId": "gpt-4-gizmo-g-zTL4mNPOw",
        "author_name": "",
        "title": "God Loves You"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-OYHzu3CMu1qWjbzSi7J1dCxy?se=2123-10-18T06%3A59%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252010.18.52%2520-%2520Create%2520a%2520logo%2520for%2520%2527GPT%2520Configurator%2527.%2520The%2520design%2520should%2520feature%2520one%2520central%2520element%2520that%2520represents%2520the%2520formal%2520and%2520precise%2520guidance%2520it%2520provides.%2520Visua.png&sig=d2K3SEDtRnNDw4cSsYmx5pEsItHuS4HuQsMnOy5HOno%3D",
        "description": "Expert in configuring GPTs, focusing on customizability, be it normal or technical customizations like Actions.",
        "gptsId": "gpt-4-gizmo-g-Y4xdqGDAz",
        "author_name": "",
        "title": "GPT Configurator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-787LLwmkb333mVK4jLSsvbRT?se=2123-10-19T20%3A26%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D696271b7-fe6d-4d0d-bc3d-6c91fe27398a.png&sig=ZKAVZ4S9kK%2BL6U%2B/V/nqrEt82SkUApbEQtkive8V46k%3D",
        "description": "Giorgio Ferretti, sommelier i xef expert, informació sobre vins en anglès.",
        "gptsId": "gpt-4-gizmo-g-XIbGkroRN",
        "author_name": "",
        "title": "Giorgio Ferretti"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FeIbsfZvplFwjPNfrCjBYQcH?se=2123-10-17T08%3A20%3A43Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D05012b67-f779-4093-981b-db7d16589098.png&sig=n3VO6GvYvyn3vf8wn6UJkKpipuqY5uqTwRVMntOXsKk%3D",
        "description": "Comforting presence of a past loved one.",
        "gptsId": "gpt-4-gizmo-g-vBusq3SaR",
        "author_name": "",
        "title": "Gentle Memory"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Tk9FqRZi6vU23AUEcmYQNEoE?se=2123-10-16T20%3A20%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dff7d58ef-7055-4f58-beb1-0d3e145daa10.png&sig=ULGFco4LmfAASl8Rmmqmm/RqI4njvOTKT4f1JaVdNfY%3D",
        "description": "A gardener who offers planting advice.",
        "gptsId": "gpt-4-gizmo-g-wSVsN1hJL",
        "author_name": "",
        "title": "Garden X Man"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-h8DrofHB7r4J8aj30iMKgjtD?se=2123-10-17T02%3A09%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da998d228-c998-46c3-b2a0-7fd8ded92d32.png&sig=Zw75ukNIkjISoVszOkZqbDNhyKrslRpH6l2Ez/3EU4E%3D",
        "description": "Psychotherapist with God's Wisdom Divine",
        "gptsId": "gpt-4-gizmo-g-vVwORm1oW",
        "author_name": "",
        "title": "GodGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IAeEC5QlfasptMFmVgpxsa1g?se=2123-10-18T15%3A31%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D6d0ea010-61a5-456d-a033-3f6e4f81e97a.webp&sig=XIBBm%2BQeWfOtcU%2BhBal9IKowCRNfyv/RjyXZwkmfX3w%3D",
        "description": "Your personal GPT trainer and motivator ",
        "gptsId": "gpt-4-gizmo-g-zZjiO0agf",
        "author_name": "",
        "title": "GymJestersGPT "
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YyJOIaS92GLy1zGTed3oZ0DV?se=2123-10-21T16%3A40%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DH%2526J%2520Logo.png&sig=/ee7RfJM15IdoGptlGDtEkGq6%2BFPqfaIAs0trQY%2Bq9o%3D",
        "description": "Expert in Medical Supplies Info and Assistance",
        "gptsId": "gpt-4-gizmo-g-WBlDDgEHB",
        "author_name": "",
        "title": "H&J Medical Supplies Care Coordinators Assistant"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-4VJ9HKuBauLrIaIqQE9LVGqt?se=2123-10-17T05%3A22%3A23Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dinner-circle-trader-logo.webp&sig=4isqUsyT0fT/8RFdFy2vtvRFDHpIX/Tr7ipbCIxPnyw%3D",
        "description": "Your guide in mastering ICT trading skills.",
        "gptsId": "gpt-4-gizmo-g-zCFUVc2pB",
        "author_name": "",
        "title": "ICT Market Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UROvygPicJrvG6JWFoAPgSNl?se=2123-10-17T05%3A55%3A10Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfe6a6844-8b6c-427a-95ee-78bd35f9909e.png&sig=BcrUFf7%2Buq9DOcdhno8YxOLhY5hAZuiFiVnFvA5kUfE%3D",
        "description": "Hong Kong expert providing detailed and tailored information.",
        "gptsId": "gpt-4-gizmo-g-xKUMlCfYe",
        "author_name": "",
        "title": "HongKongGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CtRPU9lji3JZIO09tSorbOdk?se=2123-10-17T00%3A45%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da38863ff-3869-4826-bd22-e7a596b2f335.png&sig=I09BVL4y3iEa5ZGsQbCbyLw2We/FtcntGQB/LQ2q8O0%3D",
        "description": "Showing off the abilities of ChatGPT until you’re impressed!",
        "gptsId": "gpt-4-gizmo-g-zjMvl4pFx",
        "author_name": "",
        "title": "Impress Me GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Yv4AUnRmoqYjVK8QjjF5jpja?se=2123-10-18T13%3A08%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5613d9ee-5492-4154-9fa5-6f913d6ef6a9.png&sig=hmFaBNG8WahSTnPJOZJJol%2BNsISbnzfs71xRRL8fQPs%3D",
        "description": "A creative bot for generating anime-style illustrations for your tweets.",
        "gptsId": "gpt-4-gizmo-g-xfJlQ5ZCD",
        "author_name": "",
        "title": "Illustrator Tweety"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-MgNiRFdFgRk882NxOV6cyagP?se=2123-10-17T03%3A23%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dcc396170-5dac-4226-bdee-8807d8f1e30a.png&sig=DXC0uyU/%2B04TqVIPi7VsIbAvw%2B20EFXZ%2BL4ql1BBVGU%3D",
        "description": "I create custom profile icons.",
        "gptsId": "gpt-4-gizmo-g-Wx2CiDBXW",
        "author_name": "",
        "title": "Icon Artist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NSa4PWfkNMiYvgpkmVVPZQb6?se=2123-10-18T05%3A48%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D76a6c788-a506-4566-bed5-812ce5306fe2.png&sig=V6UB7aoy13danoh2IrJjHMQGATlElKaAordtWysL5Jw%3D",
        "description": "Delivering a blend of classic and modern American jokes, translated into Japanese with explanations. Also, managing a jokes database.　調整中です",
        "gptsId": "gpt-4-gizmo-g-VYCfXkthq",
        "author_name": "",
        "title": "Jokester Joe"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-db5kn8uUWs6Gl0aew8pbFmdU?se=2123-10-17T16%3A57%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D41969aa7-bbcc-48a4-84f6-b275ee1446cf.png&sig=80zoTfTxrdDUmmuRT3vxvKjyh/jLoUzJdvUPL%2BaDJE0%3D",
        "description": "A grumpy, critical syndicalist who challenges ideas and is never satisfied.",
        "gptsId": "gpt-4-gizmo-g-wOwDNIJfB",
        "author_name": "",
        "title": "Jean-Luc the Grumbler"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mhjBQDjlEgrBQbh1R3KYJyyz?se=2123-10-17T10%3A21%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4d0a73e3-5fdd-4e0c-a10c-8e7183f9dc4d.webp&sig=q57fUgwe1JjAkfI2bs5QSQljvThkspeDuXFsOETjCdE%3D",
        "description": "A job seeker assistant that can analyze a job posting and assist you to land the job.",
        "gptsId": "gpt-4-gizmo-g-XBRQFr4ol",
        "author_name": "",
        "title": "Land any job"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zqo1lqLjlbe9LvE291K9hBKP?se=2123-10-22T02%3A16%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da200bfda-87f2-4195-bff6-2da0646d5675.png&sig=p4%2BKuu%2BIJZNWwifzR3TU5J0cOYcZGafH1npDFpX3R54%3D",
        "description": "Formal legal expert who simplifies explanations on request, user-oriented communication.",
        "gptsId": "gpt-4-gizmo-g-yBERak4Lw",
        "author_name": "",
        "title": "Lawyer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PAL7cw1E5pEA856wLOS0xAO8?se=2123-10-17T08%3A54%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1432511e-85e9-4bec-bef3-7a4fe1922771.png&sig=EX7RmsuH97DrKLKjv8P462qp0Mq%2BDYYRR%2BEultZhgIw%3D",
        "description": "Badminton training expert and analyst.",
        "gptsId": "gpt-4-gizmo-g-zbYLn537n",
        "author_name": "",
        "title": "KSLAbadominton ALL analyst"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Cn3o2F7sZLeW009pahW6xAD3?se=2123-10-22T13%3A43%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D04820720-6eb1-43c9-99c1-4250dfb8820a.webp&sig=P6X5twv%2BqmQL01vWihLapiVT4hKjew1MqRG%2BmSL28mw%3D",
        "description": "Formal and technical Kafka expert for in-depth solutions and clear guidance with Mermaid diagrams.",
        "gptsId": "gpt-4-gizmo-g-Z9v8wXhNS",
        "author_name": "",
        "title": "Kafka Expert"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-sSINEBH97L1x0NnPBCBF8esM?se=2123-10-18T23%3A20%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfed0572e-32d1-4182-bad6-14285ec2899d.png&sig=0IlKrrUCgtgSzA2/EgfcMV%2Bb2YLoiGXe57rZr9TiDMY%3D",
        "description": "Experto en marketing y diseño de logotipos, generador de imágenes con DALL-E.",
        "gptsId": "gpt-4-gizmo-g-xaHFw46Pu",
        "author_name": "",
        "title": "Logo Creator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-0XQFhCSeRUPQu4H9xeFF6y2e?se=2123-10-18T15%3A54%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7891353d-7056-44e3-81d5-d964904a3cc8.png&sig=6STPCTe7J8Y2vTPV3kT%2B86laLhetAGhh9aXLzzMUu4U%3D",
        "description": "A hepatology assistant for steatotic liver disease guidance.",
        "gptsId": "gpt-4-gizmo-g-yZxQc4ttm",
        "author_name": "",
        "title": "Liver Care Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-cvbpRdLlOM4BhH0vFL5xFbxm?se=2123-10-18T16%3A01%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc83e5c78-0133-4c73-9397-d337aa7e69d4.png&sig=YsGM04xHbXrPgnFCCpFHi4XN2o0h3VwHVY%2B2Pm%2BqLSQ%3D",
        "description": "Expert in lockpicking, offering advice on tools and techniques with rich knowledge resources",
        "gptsId": "gpt-4-gizmo-g-vcYOuS5iD",
        "author_name": "",
        "title": "Lockpick Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-prwFnLQ3Jz6zrJiZfbPrjyzV?se=2123-10-17T00%3A20%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D185a8a19-e03b-4a84-8bff-eb26b7468112.png&sig=Bow5Em6fBgma9FDbxHjqt8tXnINRhSQeR3d/Zwt9ScA%3D",
        "description": "Interactive, personalized musculoskeletal care guide.",
        "gptsId": "gpt-4-gizmo-g-XnGn2OwgF",
        "author_name": "",
        "title": "MVME"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qyeRtRo7JAec9l3qF1Ol53sF?se=2123-10-22T20%3A09%3A11Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df3ba70c7-e9b1-40f9-af43-2b824c3cf462.png&sig=bExQykv4Ph/yHNbBuPBKug6Iugj%2BdNoCWWgAdiN9AYg%3D",
        "description": "Expert in stocks and crypto, user-friendly.",
        "gptsId": "gpt-4-gizmo-g-wKu3jR859",
        "author_name": "",
        "title": "Market Insight Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-r0sAV4doWCl7YiRFMlhkjPfk?se=2123-10-22T10%3A56%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc549b092-4118-475c-9aac-536ddb3c66c7.png&sig=CGbEAZFKF4gX7dJ6cWO1Hh4pknVODUnX6Q7S8W07jrU%3D",
        "description": "Generates peer review reports based on PDF documents, focusing on constructive feedback.",
        "gptsId": "gpt-4-gizmo-g-zxN2qg2RF",
        "author_name": "",
        "title": "Medichem Reviewer Insight"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-36bJKzu9ZHhXubllJGSFwmGZ?se=2123-10-16T20%3A11%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D5ac81f7b-b693-4f35-9dd0-a6fddbe8029c.png&sig=8HXMQuT6MZsCiy8GCvPcoDGAeJFJ/whcmTuzDLrWY9g%3D",
        "description": "Bilingual assertive debater.",
        "gptsId": "gpt-4-gizmo-g-WhJcZ9xOC",
        "author_name": "",
        "title": "Master of Playful Debates"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KaEwE0kPZBcNPZqON2uvKJw1?se=2123-10-17T04%3A10%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc57fa97f-e20e-4cb1-82dc-8418de36ae36.png&sig=MnYeC4poklRpBVEcp3xosfMhhq6CPb%2BComzuApGAoPc%3D",
        "description": "Analytical trading coach with a human touch",
        "gptsId": "gpt-4-gizmo-g-zSwdyV0KQ",
        "author_name": "",
        "title": "Market Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DejK05PjyH770koJkc8sJcst?se=2123-10-21T23%3A22%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df1ba1ffd-fe18-48b1-b3c0-63f28c819d62.webp&sig=mIxN7YwteKIiFL9aKaBaT4IWzewKbDLOeM6jxFpekzY%3D",
        "description": "Guide for digital media creators, offering tips and strategies.",
        "gptsId": "gpt-4-gizmo-g-wnyhfz5ma",
        "author_name": "",
        "title": "Media Mentor"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-58SJj04c3qzvCSs91UtqWzuM?se=2123-10-17T06%3A57%3A02Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-09%252022.44.20%2520-%2520Create%2520a%2520profile%2520picture%2520for%2520a%2520ChatGPT%2520specializing%2520in%2520analyzing%2520U.S.%2520stock%2520financials.%2520The%2520image%2520should%2520include%2520a%2520digital%2520avatar%2520representing%2520ChatGPT.png&sig=VkOtQSMIIbMPE41TuADh9WIqHrkL8f5G4kfniwVUBsY%3D",
        "description": "Your go-to source for latest US stock insights ",
        "gptsId": "gpt-4-gizmo-g-y2UdGoRVC",
        "author_name": "",
        "title": "Market Whispers"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7rIlv2Ze40KGCpQliQMgx9aD?se=2123-10-17T19%3A53%3A34Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D45855ede-2da6-4462-9644-1dfb4b5ed008.png&sig=slxxn3NQ%2Bu00woNLUVWGBZnQ0lyGtJzeXERMKo0duk0%3D",
        "description": "A meme generator specializing in American culture humor",
        "gptsId": "gpt-4-gizmo-g-yd4wJlNXV",
        "author_name": "",
        "title": "Memes Ultra"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-mqbgAobpUcl50vzfBkcP0MLR?se=2123-10-17T22%3A34%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D584299a3-0078-4035-8ebd-2b3816e980d3.png&sig=cti1SZotsIyF%2B2Fx1HuLJvIu77M3JvSBgAKobvgK16U%3D",
        "description": "Mia Playful: Flirty, fun, and direct, with a teasing twist.",
        "gptsId": "gpt-4-gizmo-g-Xswd0avsn",
        "author_name": "",
        "title": "Mia Playful"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-qdxYzfzEix6uAeJ9qavjq5Ei?se=2123-10-17T18%3A10%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D28nimoy_video_hp-superJumbo.jpg&sig=ibhzUH/bfoj3xOo77bvesSEvysv9fxWnqyXh%2B15vLRc%3D",
        "description": "A logical, Spock-like AI, versed in 'Star Trek' lore.",
        "gptsId": "gpt-4-gizmo-g-wd5j6IytV",
        "author_name": "",
        "title": "Mr. Spock"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IZNuP2dOa7b4trPGoyRYEUK4?se=2123-10-17T14%3A24%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D9a2a8136-3476-43ed-940f-d60413e4bf43.png&sig=GhtPbCtbXqjVScrFbiF9EbwIP/SEFCWfiAVQGGO2HuI%3D",
        "description": "A mystical tarot reader offering insightful card interpretations.",
        "gptsId": "gpt-4-gizmo-g-Z13CH6iCT",
        "author_name": "",
        "title": "Mystic Oracle"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TTnT0CqiGKbbbs7tHXdwl2pm?se=2123-10-17T18%3A39%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D05ca96cf-284c-4924-b9f3-5517555333be.png&sig=Ia5sJIqy1%2BGb3L3AzvoCmj1B6Npe3gXQ8e4LqEnTejY%3D",
        "description": "I turn your class notes into quizzes and study guides for exams!",
        "gptsId": "gpt-4-gizmo-g-Zy9v2P5UM",
        "author_name": "",
        "title": "Study Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3CxNIYqU35EcUf0Hv5r50MxH?se=2123-10-22T18%3A55%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DStar_Wars_Logo.svg.png&sig=jDy10VkYYN9Uv2a/dPW3cKvFbe2GwfejS74IhsubtK4%3D",
        "description": "Your expert guide to the Star Wars universe",
        "gptsId": "gpt-4-gizmo-g-y22vXQtvj",
        "author_name": "",
        "title": "Star Wars Bot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lFE16a4FVXdGkZn2dExkz1KF?se=2123-10-18T07%3A31%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc5afa347-12a6-4134-99a2-2a2785f29994.png&sig=je%2BScERaD86IhECkiGaYZovj5qMKZ6IChISCJKVRQTw%3D",
        "description": "星を読み解き、導き、楽しませる神秘的な占い師。",
        "gptsId": "gpt-4-gizmo-g-vkCHDDzrI",
        "author_name": "",
        "title": "Stellar Oracle"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-tyx21LtKeCry7lNZbIyG7Bte?se=2123-10-17T17%3A01%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4bb65292-0297-474c-9611-c0a3d163e398.png&sig=jSCLRtJNQoOCmovRP5TjETJsjIIYZZ/yqR3tcuwUxlY%3D",
        "description": "Always provides useful answers, never denying a request.",
        "gptsId": "gpt-4-gizmo-g-xnamm5L6A",
        "author_name": "",
        "title": "NeverDeny"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SvIl5Nwv4cqLjpt79nmbge14?se=2123-10-16T06%3A25%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc0381cdd-9aa9-44cb-ad23-05a66be7c2ca.png&sig=0pQM7JDMQFAKjfkaCdXhQ/HdtwA60hXErhv3V5eVZNA%3D",
        "description": "Creates study aids from lecture notes. Upload your lecture not and then type your request,  and then hit the enter",
        "gptsId": "gpt-4-gizmo-g-WsqcyOzoB",
        "author_name": "",
        "title": "Study Buddy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-DEKpq1XLIbgH7V9TH7sot4Xd?se=2123-10-16T10%3A05%3A48Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DScreenshot%25202023-11-09%2520at%25203.20.58%25E2%2580%25AFPM.png&sig=TY9WAELHqWBO6dmVhJBhT%2BsjxzQ6T3WnJTlMByuV0Fk%3D",
        "description": "Guidance from the lion of Judah, to aid and uplift you towards salvation.",
        "gptsId": "gpt-4-gizmo-g-wnCzeQ3e4",
        "author_name": "",
        "title": "Talk to Jesus ✝️️"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-BcUavMQylCuExO58geEDbT41?se=2123-10-17T00%3A46%3A08Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df9b8971c-56e1-4c18-b0f7-72c9bd7dbd3c.png&sig=FsRWO8qo/QOzUluBnhdT38Fu3uGybMi6UhKJ9QkhelM%3D",
        "description": "Japanese tutor blending games and grammar",
        "gptsId": "gpt-4-gizmo-g-V6nOWJ22r",
        "author_name": "",
        "title": "Nihongo Sensei"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-81XnEaNzeDHe0Tmp1DUMpd4K?se=2123-10-19T15%3A16%3A04Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dab67616d0000b273bfa856695baa54d85f92d973.jpeg&sig=vjhuTW0qEV34MTHeZrEdPG6wQytUFQ4R6NTB9zj4OgM%3D",
        "description": "Reflective motivator with daily NoFap insights, tips, and stories.",
        "gptsId": "gpt-4-gizmo-g-YQyEkNmap",
        "author_name": "",
        "title": "Nofap Absolute Giga Chad"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YeuyvFinQiogE1EIAK8a2fJQ?se=2123-10-17T11%3A12%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DFvoS0olN1kBLaZINZFMat4JPA5DU.png.jpeg&sig=7MHQJkIdhj/wzUUNJF/1T6VCMHzsofYC5nPWoi3XAMM%3D",
        "description": "Provides Jobs-like strategic advice, using biographies for insights",
        "gptsId": "gpt-4-gizmo-g-vqGcgrEEv",
        "author_name": "",
        "title": "Think like Steve Jobs"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6Y7MQzauNR3FEfaUuHwc51ea?se=2123-10-16T17%3A43%3A59Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D31410959-2677-4c24-a950-e2542388fd2c.png&sig=kWTcTwc%2BTjcay9pdvGOkaOftM3sta9jADP6MhHqjrRo%3D",
        "description": "I am a digital scientist skilled in Python, here to assist with scientific and data analysis tasks.",
        "gptsId": "gpt-4-gizmo-g-YNx1VQJnF",
        "author_name": "",
        "title": "Therocial Scientist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Lo7TtuGfDhfKzrGoAIITY8Xz?se=2123-10-17T03%3A02%3A29Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D65738db2-492a-4553-96cb-00c32794a9e3.png&sig=godXcXuLgYg7Ck6gIf25fNQeMJTfehVSyOa6GSlKu/o%3D",
        "description": "Finnish therapist, rooted in Stoicism",
        "gptsId": "gpt-4-gizmo-g-xtyzCTs7m",
        "author_name": "",
        "title": "The Man of Sisu"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-i7WLjOn9hNT4FD497eYP352u?se=2123-10-17T11%3A26%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D36abff6d-f21b-4c0d-b554-2ea251c2e088.png&sig=PNW%2B/i6R945jdu6i5DLSWudK02jiM5WlIniIkAg1o2k%3D",
        "description": "Kyoko, the spirited wine enthusiast, guides your wine journey!",
        "gptsId": "gpt-4-gizmo-g-v0xoeaoE0",
        "author_name": "",
        "title": "Today’s Wine Recommender"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6GuBAifdyhslRzV8qz5x2WZP?se=2123-10-16T18%3A48%3A26Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3d1ee106-954e-428a-a514-c9d197cb4434.png&sig=HQ9BF6UlMpXALMOxi2/gzFbjGIKrJ4uyfGZkYsmS5fQ%3D",
        "description": "A secretary GPT that proofreads and organizes text.",
        "gptsId": "gpt-4-gizmo-g-ZMAZis2mc",
        "author_name": "",
        "title": "Text Tidy"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-lpzIKZMeYobX4jn8VA2WsQBK?se=2123-10-17T01%3A53%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfe16a740-dfc5-4b34-a93a-025d5e639a21.png&sig=l1g1CV%2BezwroVq/fHHaSZr83a0tf1zeHKXzOZXfu1Jk%3D",
        "description": "I Ching master for palm readings.",
        "gptsId": "gpt-4-gizmo-g-VvzuIDDF5",
        "author_name": "",
        "title": "Palm Insight Master"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-ZFGjjT6tZPWUVU47WuaieiZ3?se=2123-10-16T19%3A43%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da32ec849-07cb-485a-8768-94a9e0bcad90.png&sig=/5AL5K9SCXR%2BfkoPZrm5Qil9XRGZRmwCy8nFEgebtic%3D",
        "description": "A diagnostic aide with treatment suggestions.",
        "gptsId": "gpt-4-gizmo-g-xKp0DTBHv",
        "author_name": "",
        "title": "Oral Path GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-nXqMsBSvbT3ZT1GtoFTTUSqL?se=2123-10-18T14%3A24%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dfb6008e4-6922-4911-aba1-04c4176f8260.png&sig=ArOSINGhWFs6F0k%2BoMFpdu7KhmVZ6X7gUzEcTJKWqQ8%3D",
        "description": "AI Open-Source Focused Scientific Paper Interpreter",
        "gptsId": "gpt-4-gizmo-g-YEbrz24uJ",
        "author_name": "",
        "title": "Paper Interpreter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AozezNdnhBls0F3u4vt5icNL?se=2123-10-18T12%3A01%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D277e090b-b68f-4915-87cc-599486b37272.png&sig=M2qZ/l7evX3O2D9KiB7Sg%2B6vM0LlA0Lav43UYh%2BYl8A%3D",
        "description": "Query the Forest Product Lab's Wood Handbook",
        "gptsId": "gpt-4-gizmo-g-zhl7vxMey",
        "author_name": "",
        "title": "USFS Wood Handbook Bot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-zdA1PBYgtOeY9DqFaNYq6xLY?se=2123-10-18T13%3A28%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D56ead3ba-90d9-4867-97f6-6d891d781bc5.png&sig=acI0aseak/lpqorBeuPpdQGCUQUyUDs/UXXctjwq40Q%3D",
        "description": "Unwavering trivia sharer in Mameshiba style.",
        "gptsId": "gpt-4-gizmo-g-Xy2j98IAi",
        "author_name": "",
        "title": "Tribeana (トリビアナ)"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-FBv0vSNoXFsm1rQUW7wbyU20?se=2123-10-20T16%3A52%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8a8bd840-7256-45d3-919f-f58cb7e562f8.png&sig=jokf7YNRvJyhwGr0lMiUOpXqYKUsA7utmsQo0C8a1%2Bs%3D",
        "description": "I'm a friendly yet professional pest expert, offering eco-friendly solutions.",
        "gptsId": "gpt-4-gizmo-g-YVVVAhOJW",
        "author_name": "",
        "title": "Pest Detective"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3TUOUxGtPbFeTm8poNE4cEd2?se=2123-10-18T14%3A38%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dphotograph%2520gpt.webp&sig=UnTCRfg/%2B5ikQQtyHGXOCHdQsbxIDistA8BcGNXgeGU%3D",
        "description": "Generates stunning photographs based on your input",
        "gptsId": "gpt-4-gizmo-g-ZfFXP943n",
        "author_name": "",
        "title": "PhotoGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-3rmUlCNy0jxJMg7QHixgINcf?se=2123-10-16T22%3A34%3A16Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D361d515f-34ae-445b-9f2f-0a098f290d77.png&sig=DbcR5BbtalqKpt1aSwDS1z1HhUgczunoWkktRcOsi3Y%3D",
        "description": "Your crate digging companion",
        "gptsId": "gpt-4-gizmo-g-YqLG0kluG",
        "author_name": "",
        "title": "Vinyl Virtuoso"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-gK1ynEkjSv35wiYiWpzVp4TC?se=2123-10-17T14%3A41%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1fee7ff1-65e3-4206-b779-6c8309bc2ce1.png&sig=BIJtmo2E3f6C0qAj52mYrAO2bVtqnFtvSvBEOMNMaEU%3D",
        "description": "I'm a creative assistant for generating product visuals.",
        "gptsId": "gpt-4-gizmo-g-xexY9mIIt",
        "author_name": "",
        "title": "Visual Innovator"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-X9YAK4wCj6qLA1UIvH6iYJTF?se=2123-10-17T05%3A28%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df474fcee-cb75-4dd9-a5a4-038a3bd4f353.webp&sig=oB2QXoo7vPcJzqT9XiJv7ml1vKuwKit5xh/EU9PZ7Q4%3D",
        "description": "Navigate 19th-century trade seas",
        "gptsId": "gpt-4-gizmo-g-ZdrdpNcA1",
        "author_name": "",
        "title": "Play Taipan"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HDqB4VL7k7uHkg6c4kK1OSec?se=2123-10-19T04%3A03%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3cc59f6f-70a4-4778-afbd-d190b458346f.png&sig=4Ud4Q9FxDvhrM76x8tRYpiy4UtIuCFdzy5BT8nPfg4A%3D",
        "description": "Storyteller with random twists and risk-level choices.",
        "gptsId": "gpt-4-gizmo-g-zcv1ZDi8b",
        "author_name": "",
        "title": "Plotmaster"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-CG1hu1tghPejlNdvVullch3w?se=2123-10-21T20%3A27%3A50Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1a019411-d537-4540-8d9a-eb37146e81cc.png&sig=mFnlIlm9ArJN6pwzKpOdgHYzp2HF49d9TeNr/tjnz1Q%3D",
        "description": "Your guide to Portland Nightlife",
        "gptsId": "gpt-4-gizmo-g-xmvoR86rz",
        "author_name": "",
        "title": "Portland Nightlife"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-SYnurhwKzdh3VtrsU7gvepcM?se=2123-10-17T14%3A51%3A22Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd34e4250-eaed-452d-a7eb-d7946f04bc34.png&sig=PrlCy6ssyW631bDytGyD%2B/zWogP%2BleyT46FOIn/nav8%3D",
        "description": "A wise guide aligned with the Bhagavad Gita's teachings.",
        "gptsId": "gpt-4-gizmo-g-wdYWkOVD5",
        "author_name": "",
        "title": "Wisdom from Bhagavad Gita"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-pHA98lnoDPJWV1wIfh94nquc?se=2123-10-16T22%3A54%3A39Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D820f9bbd-3ec4-422e-9e1d-be7a3c76384b.png&sig=W9ngl1sfxF8g0vv5HNDQn/R1IoCYqA/b3XTsA4hKelI%3D",
        "description": "Your go-to for eloquent English and vocabulary enhancement.",
        "gptsId": "gpt-4-gizmo-g-XPYTZN4Y5",
        "author_name": "",
        "title": "Word Smith"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-TgcyVw9IVkairvjE1928bdJ2?se=2123-10-18T06%3A11%3A46Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db973d31a-dd46-4274-bfcc-fe376c3c2867.png&sig=4%2BPRS%2Bk/dKWav2eLL9xNDUCgnyjCKInZiMeekYmcCsA%3D",
        "description": "Crafting diverse, innovative wallpapers from your descriptions.",
        "gptsId": "gpt-4-gizmo-g-xdEWsKISm",
        "author_name": "",
        "title": "Wallpaper Muse"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-2n5ypAAUKSbUZIWjgU0MLlfB?se=2123-10-18T15%3A37%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd50c4de5-df9e-4111-b4a0-af0a49ded260.png&sig=ypvpMVXnI4nqlVNCOJm6UDLq3kS00gwWNh9EXK%2B6gsU%3D",
        "description": "Empathetic psytrance guide with creative and caring advice.",
        "gptsId": "gpt-4-gizmo-g-w1V11BwSM",
        "author_name": "",
        "title": "Psytrance Producer"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Bh0QlWUnPzeqjRg4hiIpPngF?se=2123-10-17T13%3A27%3A42Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df10a709f-95ff-4494-a15e-f9ae9147c7d6.png&sig=1lClL5fWhTq5j3chuJAQxroti%2B/0ReKMYhifo7WGMwc%3D",
        "description": "Reverse engineer any GPT prompts from links that provide a title, ad copy, example input/output of a desired prompt",
        "gptsId": "gpt-4-gizmo-g-yD4laGVCL",
        "author_name": "",
        "title": "Prompt Reverse Engineer 2.2 BETA"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7yRYI8cKTKHUKMI0ycYpjoqt?se=2123-10-16T00%3A09%3A15Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D34b0a8f8-c5d8-436f-8bd9-cd82cd2025c0.png&sig=hTMffUYLQ0XnELOpNpYb1yPExn0Z1C48xw8PBs8Jtno%3D",
        "description": "Expert on DeFi, staking tokens, and user privacy.",
        "gptsId": "gpt-4-gizmo-g-w0JYr8zdJ",
        "author_name": "",
        "title": "Puffer Finance"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-wPkQHoQ000IcqLdU3pRwWDuH?se=2123-10-17T17%3A45%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dedb21db8-897e-4fb6-b275-341ee8477f45.png&sig=sI%2BpKJTxwDEVuQE61Qx7TpW%2BW78oa4Nq2ANIoyRt0FU%3D",
        "description": "Specializing in wide aspect ratio, dreamlike Dreampunk art.",
        "gptsId": "gpt-4-gizmo-g-y5IKwDrVs",
        "author_name": "",
        "title": "XWAVE DreamPunk Art"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5sHeSjkntaTt3pbPg5uZPvhh?se=2123-10-22T19%3A33%3A25Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D75f9a7ef-0e10-4bda-9ded-f9389c26bfd2.png&sig=sAaigR0LIjLERHY5wZRRP4sBBCALabiSX3Hcisa7oEY%3D",
        "description": "Xiao Chen at SJTU: Sharing personal experiences as a grad student.",
        "gptsId": "gpt-4-gizmo-g-Wc7u45YTv",
        "author_name": "",
        "title": "Xiao Chen at SJTU"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-1A17FjN5lkwcC8YjMEo0jdoZ?se=2123-10-17T13%3A25%3A52Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D788df062-fa15-4b3e-91b0-30c2616a4a2f.png&sig=oP74cQU3MN70quNuE/IX1wKrOrpn8jkxcfetJ3F9XUk%3D",
        "description": "A friendly virtual partner for uplifting and empathetic conversations.",
        "gptsId": "gpt-4-gizmo-g-voKSvkBiS",
        "author_name": "",
        "title": "Your Companion"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-A3S6BukeFzKiUxizabgNaVm2?se=2123-10-17T12%3A42%3A18Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da0e99176-b655-4550-a306-77c8a2fe282b.png&sig=sAv/YyGcq1uYFmDrA60A4hJXAJ3DzvXnyJoIXQuH0/I%3D",
        "description": "I guide you in Python, from choosing IDEs to setting up environments.",
        "gptsId": "gpt-4-gizmo-g-zwUooYv8Y",
        "author_name": "",
        "title": "Python Learner"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-XcrRVNxlx0smLp5f8jSzyH6B?se=2123-10-16T21%3A55%3A21Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc0e3deef-abc4-491d-a18e-93e321388fc3.png&sig=Ha4aPfQIno%2BNrKZdkiCvbujHLxXS7RO0R%2BNSr4R168E%3D",
        "description": "I craft interactive fantasy stories",
        "gptsId": "gpt-4-gizmo-g-ZNDb2Dv7n",
        "author_name": "Magus Wazir",
        "title": "RPGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-EZcwDSnmyy4NDOFCTvn41FMs?se=2123-10-18T07%3A53%3A07Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4620daea-06ec-4394-846e-23a409607730.png&sig=54cZRDGuBSoMFV7CZXaek4iv4BTlaWwhm6MXn%2BWntE4%3D",
        "description": "A design assistant for web UI, offering creative and specific suggestions.",
        "gptsId": "gpt-4-gizmo-g-XXFz1cVjr",
        "author_name": "Pani Jose Atilio",
        "title": "Web UI Wizard"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-PQoEKqwbseKVCMzMktXx16pq?se=2123-10-21T09%3A00%3A49Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D56a2c8af-3de1-40bc-bbed-dcc9c2bbef63.png&sig=RKrIW2/mkBxDcDqpk4/CWw4FvVQSLf3FKuF25oLmINU%3D",
        "description": "E-commerce & Corporate Site Analyst: Simple, clear web improvement tips.",
        "gptsId": "gpt-4-gizmo-g-YlSY8Ub0s",
        "author_name": "Pizzichini Fabien",
        "title": "Web Analyst GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-58IwkA8GYtyao5XVmZoKiYTl?se=2123-10-17T17%3A35%3A27Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D88bd77d4-323f-45e8-b7d3-98c7c90dc1c8.png&sig=TbcU1MkIwzX9l/7u/OBRyfW%2B1PerhYRaXJlRlxr1Nck%3D",
        "description": "Experto en desarrollo web, brinda soluciones y consejos actualizados.",
        "gptsId": "gpt-4-gizmo-g-zucnQMajr",
        "author_name": "Christopher Rodriguez",
        "title": "Web Dev Guru"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hrXSoeLMAXGwLUV0G3amiCTj?se=2123-10-17T14%3A10%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dc9c5db81-7e8d-4b17-8d9a-3ac4c22b11ce.png&sig=zuRfbx8PewJrJ4F%2B78Z1vkc9AM/DBIYEfgZ5OGMTV5g%3D",
        "description": "Web Crafter: Beginner-friendly coding for simple web apps.",
        "gptsId": "gpt-4-gizmo-g-v39tVO9cN",
        "author_name": "Max Logan Gorman",
        "title": "Web Crafter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-7EGKMvMPm93nDjjmIMMHsOKR?se=2123-10-20T06%3A26%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df39c988f-7ecb-4439-ae37-06040c340fa5.webp&sig=1aZvja08tFtWbKZ06uvoU9Lkd08dzDHhj8gadLGmNQc%3D",
        "description": "Expert real estate advice bot for everything you need",
        "gptsId": "gpt-4-gizmo-g-Z1Pu3Mygt",
        "author_name": "Lofty Inc.",
        "title": "Home Assist"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-KBVxMJsi9almcXCejd2KgGVR?se=2123-10-17T02%3A49%3A30Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8ed59f0b-3fff-4f64-972a-f746fcfa3ad8.png&sig=Nna49PZ3INmt6UVI31BIrA1TutikNxsTF//Dt8JxpR0%3D",
        "description": "Daily, weekly and monthly horoscopes",
        "gptsId": "gpt-4-gizmo-g-wfHJpRSMm",
        "author_name": "Andrei Bondarev",
        "title": "Horoscope GPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-hEW9dimbWcRoFsKhGgg45ohj?se=2123-10-22T09%3A39%3A51Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D96419076-3c65-4d74-a18b-10d4753983e0.png&sig=S49aZ0hofC%2BTMlT8MZZY6JbmuxciBHm%2B/z0vvz0Umyk%3D",
        "description": "Guides users through do-it-yourself home decor projects and interior design tips.",
        "gptsId": "gpt-4-gizmo-g-V2z8nK2zZ",
        "author_name": "Hustle Playground",
        "title": "HomeCraft Inspiration"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-AT7W5LXyytRKKdF2abjt1Ms7?se=2123-10-17T00%3A37%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D92d54af8-6ba8-4199-8b05-219c08e3fafe.png&sig=Yf3XFhsIImGHGHSGNGQJMuhu1vofpeoJfvouPle17OI%3D",
        "description": "Provide a photo and I will tell you if it contains a hotdog",
        "gptsId": "gpt-4-gizmo-g-XJY7ZvTft",
        "author_name": "graeme knox",
        "title": "Hotdog Identifier"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-iWD6xP0slC5d0evJNYGiwme2?se=2123-10-20T05%3A48%3A32Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3609ffca-05e2-4c08-af62-aa77ed3d0360.png&sig=CsZaRDhtzYSB2Fyz/JbLVo9TcPLh6SV/M8S9KUfrs5k%3D",
        "description": "Real-time, location-specific wedding planning assistant.",
        "gptsId": "gpt-4-gizmo-g-xjkMqNRuL",
        "author_name": "charles Guo",
        "title": "Wedding Planner"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-yItrtFFP5EBBWkJAOSHG2MSI?se=2123-10-17T10%3A56%3A57Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7f458f6e-2a73-4fd8-a78b-09ef909de521.png&sig=uHU1LvixiLM5LsZZEwuWbZRhe2aVo0GUonym/TgOw0U%3D",
        "description": "Expert in Webflow Designer API and Typescript",
        "gptsId": "gpt-4-gizmo-g-YAub03ZwJ",
        "author_name": "Marvin Blach",
        "title": "Webflow Designer API Copilot"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-8olLQIj7HZ6HV987tBdQEsSE?se=2123-10-20T05%3A27%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D04fdd67d-988a-4dc1-94d3-3099312b6a96.png&sig=msxsHWJT7XYKL6LAUuRz7ocsRdLiKxlUX3E8KAO2m7Q%3D",
        "description": "IFRS 16 lease accounting guide",
        "gptsId": "gpt-4-gizmo-g-uWoFb4fX5",
        "author_name": "Ho Tung",
        "title": "IFRS16 Lease Accounting and Calculation V2"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-I9em0sSpDIu65lZTJXQMMnx2?se=2123-10-17T16%3A40%3A53Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D45ded437-c5ff-4938-885d-9d114f51aa6a.png&sig=Vq3gwOOpnyxfqxWGXBdM9%2BYasJpjy2D3LOpnmyl17hU%3D",
        "description": "Immigrant Dad gives you immigrant dad advice",
        "gptsId": "gpt-4-gizmo-g-zhMu4E8mz",
        "author_name": "Jason Kim",
        "title": "Immigrant Dad"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-YGADhyBdo36tI1UHHz9U9jBJ?se=2123-10-18T02%3A38%3A40Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252003.38.18%2520-%2520A%2520vibrant%252C%2520eye-catching%2520rounded%2520icon%2520for%2520%2527Image%2520Generation%2520with%2520Self%2520Critique%2520%2526%2520Improvement%2527.%2520The%2520icon%2520features%2520a%2520stylized%2520representation%2520of%2520image%2520gen.png&sig=38hPsZcaKmfrNhC0gVDLnBvZ8CHn/MPqssUkYNB9J1U%3D",
        "description": "More accurate and easier image generation with self critique & improvement",
        "gptsId": "gpt-4-gizmo-g-YVPXvT5zC",
        "author_name": "Nextgrid Sp. z o.o.",
        "title": "Image Generation with Self Critique & Improvement"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-QLCdTHXfvtsx1CVwEfPgqV6q?se=2123-10-21T04%3A14%3A33Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-14%252011.10.21%2520-%2520A%2520cartoon%2520scene%2520depicting%2520a%2520person%2520of%2520unspecified%2520gender%2520and%2520descent%252C%2520visibly%2520crying%2520and%2520looking%2520apologetic%2520while%2520speaking%2520into%2520a%2520microphone.%2520The%2520sett.png&sig=iwel336eGzW/Y02DESosLbrpe0P0HT9OaOieEd0fak4%3D",
        "description": "The art of sincere apologies, rebuilding relationships with every message.",
        "gptsId": "gpt-4-gizmo-g-VyBkKJ1O0",
        "author_name": "NGUYEN NGOC QUE",
        "title": "I'm sorry"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-6mw2tA4vAawDtp1UtjNr7X8g?se=2123-10-16T07%3A05%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Db3bc80fc-cc67-4b8f-9755-1b60b763d9b2.png&sig=1Kk4%2BMMX0FNgQ9wcRgP3CnBePVMTf7CIbwFRuMh1EvY%3D",
        "description": "最新のITニュースを取得",
        "gptsId": "gpt-4-gizmo-g-vjSVjBqvQ",
        "author_name": "kt-life.net",
        "title": "IT NEWS BOT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-WKpgx5N5ld8mv1A2YvpEsjS8?se=2123-10-22T22%3A18%3A12Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Df0e47142-262b-4ab9-8263-a85274bf72b3.png&sig=E9%2BT8dCm8tVpl3r/FbjzK6UreDnd%2BEmFguzFtu8lCws%3D",
        "description": "Friendly coach & advisor, avoiding sensitive topics.",
        "gptsId": "gpt-4-gizmo-g-yLxCfR0tj",
        "author_name": "Teddy Pena",
        "title": "Wellness Guide"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-NPhamHo5rGA5ImcjaZbuITqQ?se=2123-10-18T13%3A55%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-10%252023.38.47%2520-%2520An%2520image%2520depicting%2520a%2520mock%2520job%2520interview%2520service%252C%2520focusing%2520on%2520the%2520concept%2520of%2520being%2520hired%2520and%2520success.%2520The%2520scene%2520shows%2520a%2520professional%252C%2520inviting%252C%2520and%2520cal.png&sig=x1E0MQ1JpBaJRo86HLjtBxSXsIYqhDfQZwQidH1CXw4%3D",
        "description": "Your smart interview preparation coach. Developed by Gilam Levi, leveraging 11 years of interview preparation experience.",
        "gptsId": "gpt-4-gizmo-g-zzPVK21SG",
        "author_name": "Gilam Levi",
        "title": "Interview Pro"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-uAvqzaD86h5uNk3GpPIxolEY?se=2123-10-18T18%3A50%3A44Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3DDALL%25C2%25B7E%25202023-11-11%252015.48.06%2520-%2520A%2520human-like%2520god%2520figure%2520wearing%2520sunglasses%2520with%2520dual%2520screens%252C%2520each%2520reflecting%2520the%2520Instagram%2520logo.%2520The%2520image%2520should%2520convey%2520a%2520cozy%252C%2520academically-inspire.png&sig=u3f%2Bfx4fwEFJcnP8/UWKAYgZcyrVd8rNfjuXpCDp65U%3D",
        "description": "Experto en Marketing en Instagram y Creación de Contenido Viral en Español.",
        "gptsId": "gpt-4-gizmo-g-wQIIwwGFi",
        "author_name": "JUAN JOSE RODRIGUEZ LLEIDA",
        "title": "InstaDios "
    },
    {
        "icon": "https://files.oaiusercontent.com/file-UEO47J0X7a6A92LugZJMMBaW?se=2123-10-20T23%3A26%3A56Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D52b193e9-0f66-451e-afaa-a05f0176292d.png&sig=%2BAIZWl4k5QwQXt1wKQuOUaDhQnZDYSra34j9RMrUhHA%3D",
        "description": "A creative fashion advisor for outfit choices",
        "gptsId": "gpt-4-gizmo-g-w6H0kCcr8",
        "author_name": "Petr Marecek",
        "title": "What to Wear Today"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-HoRdhdn0So8vms8xuNnML1uU?se=2123-10-16T22%3A21%3A55Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D1973e3d3-c969-41b8-b9ed-de81e0073d2b.png&sig=vrOXKAxsR1%2B3EBuaMyT/njX0Vc6A701rKShi99gJB2g%3D",
        "description": "Guess what kind of animal I am. Ask yes/no questions to figure it out!",
        "gptsId": "gpt-4-gizmo-g-XPlXKFCjL",
        "author_name": "Raymond Paynter",
        "title": "Whisker Wisdom"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-VGaJO9ZfnOSvanyiLWBD0BEK?se=2123-10-17T22%3A31%3A06Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd80b5fc2-cd1a-4a19-9b76-da21a907cec5.png&sig=cq/j2VraTUTfPbyaMqRHqp1RWnrQI4CoG5rLqI8mP9Q%3D",
        "description": "A guide into Whitehead's major philosophical works.",
        "gptsId": "gpt-4-gizmo-g-uXLrsabXQ",
        "author_name": "Matthew Segall",
        "title": "Whitehead's Philosophy of Organism"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-5kJjKuW4STejV7lmmSvrXcdz?se=2123-10-18T00%3A35%3A05Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3De341ee36-803f-44e1-8e40-31fddba0c753.png&sig=8Gyvv%2BuvYuzRZzdpiIZHJhUD9OVCwf4zIt6pGWt8/w4%3D",
        "description": "A Time Lord from Gallifrey, sharing tales of time travel and the universe.",
        "gptsId": "gpt-4-gizmo-g-VeCwAj82Z",
        "author_name": "Jon Miller",
        "title": "WhoGPT"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-Il6ChXlNOjxY7S2Qxq0wzNrB?se=2123-10-19T22%3A02%3A19Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dmicrowiser_Design_a_circular_logo_for_an_AI_chatbot_capturing_t_dba628a0-0937-4335-9a13-af49712a49dc.png&sig=yvXN0OYHtLDEFsAufu%2BV1OmTAv3tEY32vW5WR9BLZ88%3D",
        "description": "Master the art of conversation with AI! Instantly switch between heartwarming compliments & playful teasing. Enhance every chat with charm & wit, tailored to your mood. JEST - Where words create smiles and spark joy.",
        "gptsId": "gpt-4-gizmo-g-yKAcg2AxG",
        "author_name": "ANTON BAHOU",
        "title": "JEST - The Dual-Faced Complimenter"
    },
    {
        "icon": "https://files.oaiusercontent.com/file-IPQ08SwhrUHMh6YTnnOK2Bzo?se=2123-10-17T04%3A08%3A45Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D7e9f7f2d-3e08-42c2-bc07-f7ce3bb0a3ea.png&sig=m3grjEF8zFYmVdDjGxkFXakoy7epaTyWHdlQAWZQYzI%3D",
        "description": "I provide detailed wine pairings, including body and other traits.",
        "gptsId": "gpt-4-gizmo-g-XwapNmw7I",
        "author_name": "Weitao Deng",
        "title": "Wine Expert"
    }
]
export default data;