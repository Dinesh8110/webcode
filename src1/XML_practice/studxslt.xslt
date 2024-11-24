<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>Dinesh DBM Atterndance</h2>
                <table border="1">
                    <tr>
                       <th>Name</th>
                       <th>Age</th>
                       <th>Grade</th>
                    </tr>
                    <xsl:for-each select="students/student">
                    <tr>
                       <td><xsl:value-of select= "name" /></td>
                       <td><xsl:value-of select= "age" /></td>
                       <td><xsl:value-of select= "grade" /></td>
                    </tr>
                    </xsl:for-each>

                </table>
  
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>


xml: test this xslt using online xslt test tool : xslttest.appsoft.com

<?xml version="1.0" encoding="UTF-8"?>
<students>
    <student>
        <name>John Doe</name>
        <age>20</age>
        <grade>A</grade>
    </student>
    <student>
        <name>Jane Smith</name>
        <age>22</age>
        <grade>B</grade>
    </student>
    <student>
        <name>Mike Brown</name>
        <age>21</age>
        <grade>A</grade>
    </student>
</students>
