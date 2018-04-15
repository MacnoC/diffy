import {Diff2Html} from 'diff2html';

export interface SharedDiff {
    id?: string,
    created_date: Date,
    expire_date: Date,
    diff: Diff2Html.Result[],
};

export function makeSharedDiff(raw_diff: string, date: Date = new Date()): SharedDiff {
    let expire_date = new Date();
    expire_date.setDate(date.getDate() + 1);
    return {
        created_date: date,
        expire_date: expire_date,
        diff: Diff2Html.getJsonFromDiff(raw_diff),
    };
}

export function isValidRawDiff(raw_diff: string): boolean {
    const jsonDiff = Diff2Html.getJsonFromDiff(raw_diff);
    if (_isObjectEmpty(jsonDiff)) {
        return false;
    }
    return true;
}

function _isObjectEmpty(obj: Diff2Html.Result[]): boolean {
    var name;
    for (name in obj ) {
        return false;
    }
    return true;
};

//export class SharedDiffRespository {
//    function(diff: SharedDiff): SharedDiff {
//    }
//    function fetchById(id: string): SharedDiff {
//    }
//    function deleteById(id: string): boolean {
//    }
//}
