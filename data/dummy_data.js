var dummy_data = {
    'columnModel_1': [
        {
            title: 'column1',
            columnName: 'column1',
            formatter: function(value, row) {
                return '<img src="' + value + '" />';
            }
        },
        {
            title: 'column2',
            columnName: 'column2'
        },
        {
            title: 'column3',
            columnName: 'column3',
            width: 100
        },
        {
            title: 'column4',
            columnName: 'column4',
            editOption: {
                type: 'select',
                list: [
                    {text: '7, 8', value: 1},
                    {text: '7, 8 editable, disabled', value: 2},
                    {text: '7, 8 not editable', value: 3},
                    {text: '저는 선택 불가능합니다', value: 4}
                ],
                changeBeforeCallback: function(changeEvent) {
                    return !(changeEvent.columnData === '4');
                },
                changeAfterCallback: function(changeEvent) {
                }
            },
            relationList: [
                {
                    columnList: ['column7', 'column8'],
                    isDisable: function(value, rowData) {
                        return value == 2;
                    },
                    isEditable: function(value, rowData) {
                        return value != 3;
                    }
                }
            ]
        },
        {
            title: 'column5',
            columnName: 'column5',
            editOption: {
                type: 'radio',
                list: [
                    {text: '첫번째', value: 1},
                    {text: '두번째 4의 리스트 변경', value: 2},
                    {text: '세번째', value: 3}
                ]
            },
            relationList: [
                {
                    columnList: ['column4'],
                    optionListChange: function(value, rowData) {
                        if (value == 2) {
                            console.log('changev return');
                            return [
                                { text: '하나', value: 1},
                                { text: '둘', value: 2},
                                { text: '셋', value: 3},
                                { text: '넷', value: 4}
                            ];
                        }
                    }
                }
            ]
        },
        {
            title: 'column6',
            columnName: 'column6',
            editOption: {
                type: 'checkbox',
                list: [
                    {text: '첫번째', value: 1},
                    {text: '두번째', value: 2},
                    {text: '세번째', value: 3}
                ]
            }
        },
        {
            title: 'column7',
            columnName: 'column7',
            editOption: {
                type: 'text-convertible'
            }

        },
        {
            title: 'column8',
            columnName: 'column8',
            editOption: {
                type: 'text'
            }
        }
    ],
    'columnModel_2': [
        {
            title: 'column1',
            columnName: 'columnName1',
            editOption: {
                type: 'text'
            }
//            isHidden: true
        },
        {
            title: 'column2',
            columnName: 'columnName2',
            editOption: {
                type: 'text'
            }
        },
        {
            title: 'column3',
            columnName: 'columnName3',
            width: 100
//            editOption: {
//                type: 'text'
//            }
//            isHidden: true
        },
        {
            title: 'column4',
            columnName: 'columnName4',
            editOption: {
                type: 'select',
                list: [
                    {text: '첫번째', value: 1},
                    {text: '두번째', value: 2},
                    {text: '세번째', value: 3}
                ],
                changeBeforeCallback: function(changeEvent) {
                    return !(changeEvent.columnData === '3');
                },
                changeAfterCallback: function(changeEvent) {
                }
            },
            affectOption: {

            }
        },
        {
            title: 'column5',
            columnName: 'columnName5',
            editOption: {
                type: 'radio',
                list: [
                    {text: '첫번째', value: 1},
                    {text: '두번째', value: 2},
                    {text: '세번째', value: 3}
                ]
            }
        },
        {
            title: 'column6',
            columnName: 'columnName6',
            editOption: {
                type: 'checkbox',
                list: [
                    {text: '첫번째', value: 1},
                    {text: '두번째', value: 2},
                    {text: '세번째', value: 3}
                ]
            },
            width: 300
        },
        {
            title: 'column7',
            columnName: 'columnName7'
        },
        {
            title: 'column8',
            columnName: 'columnName8'
        },
        {
            title: 'column9',
            columnName: 'columnName9'
        },
        {
            title: 'column10',
            columnName: 'columnName10'
        },
        {
            title: 'column11',
            columnName: 'columnName11'
        },
        {
            title: 'column12',
            columnName: 'columnName12',
            editOption: {
                type: 'text'
            }
        },
        {
            title: 'column13',
            columnName: 'columnName13'
        },
        {
            title: 'column14',
            columnName: 'columnName14'
        },
        {
            title: 'column15',
            columnName: 'columnName15'
        },
        {
            title: 'column16',
            columnName: 'columnName16',
            editOption: {
                type: 'text'
            }
        }
    ]
};