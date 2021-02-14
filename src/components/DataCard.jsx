import React from 'react';
import { Card, H6, Tag } from '@blueprintjs/core';
import { Table } from 'semantic-ui-react';

export default function DataCard(props) {

    return(
        <Card>
            <Table>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Name:
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round>*** Customer's Farm</Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Location:
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round> Wisconsin </Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Area (Hectares):
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round>1000</Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Terrain:
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round>Plateau</Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Crop:
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round>Maize</Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Sowing Date:
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round>04-15-2020</Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Harvest Date:
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round>07-05-2020</Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>
                    <H6>
                        Crop Health:
                    </H6>
                </Table.Cell>
                <Table.Cell>
                    <H6>
                    <Tag minimal round> Good</Tag>
                    </H6>
                </Table.Cell>
                </Table.Row>
            </Table>
        </Card>
    )
}