import React, {useState} from 'react';
import { Flex, Spin } from 'antd';






const Loading = (props) => (





    <Flex align="center" gap="middle">
        <Spin   spinning={props.spin}  size="large" fullscreen={true}  wrapperClassName={'spining'} tip={props.loadstate} />
    </Flex>
);
export default Loading;
