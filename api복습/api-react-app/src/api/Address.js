import React, { useState, useEffect } from 'react';
import {useDaumPostcodePopup} from 'react-daum-postcode';
import '../css/address.css'

const PostcodeComponent = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');

    let scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

    const open = useDaumPostcodePopup(scriptUrl);

    const handleComplete = (data) => {
        let addr = '';
        let extraAddr = '';

        if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
        } else {
            addr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }
            if (extraAddr !== '') {
            extraAddr = ` (${extraAddr})`;
            }
            setExtraAddress(extraAddr);
        } else {
            setExtraAddress('');
        }

        setPostcode(data.zonecode);
        setAddress(addr);

        document.getElementById('sample6_detailAddress').focus();
        }

        const handleClick = () => {
        open({ onComplete: handleComplete });
        };

  return (
    <div className="form-group">
      <div className="form-row">
        <input
          type="text"
          id="sample6_postcode"
          placeholder="우편번호"
          value={postcode}
          readOnly
        />
        <input
          type="button"
          onClick={handleClick}
          value="우편번호 찾기"
        />
      </div>
      <input
        type="text"
        id="sample6_address"
        placeholder="주소"
        value={address}
        readOnly
      />
      <div className="form-row split">
        <input
        type="text"
        id="sample6_detailAddress"
        placeholder="상세주소"
        value={detailAddress}
        onChange={(e) => setDetailAddress(e.target.value)}
        />
        <input
          type="text"
          id="sample6_extraAddress"
          placeholder="참고항목"
          value={extraAddress}
          readOnly
        />                              
      </div>
    </div>
  );
};

export default PostcodeComponent;